const { User, History } = require('../models')
const { hashPassword, comparePassword, signToken, verifyToken } = require('../helpers')
const axios = require('axios')
const midtransClient = require('midtrans-client')

class Controller {

    // INDEX
    static async index(req, res, next) {
        try {
            res.status(200).json({
                message: 'MASUKKKKK INDEX API JOBLEZZ'
            })
        } catch(err) {
            res.status(500).json(err)
        }
    } //


    // REGISTER
    static async register(req, res, next) {
        try {

            let { email, password } = req.body
            let isPremium = false
            let applied = 0
            let avatar = 'https://svelte.id/h8/p2/img/avatar.png'
            let pendidikan = ''

            let newUser = await User.create({ email, password, isPremium, applied, avatar, pendidikan })

            res.status(201).json({
                id: newUser.id,
                email: newUser.email
            })

        } catch(err) {
            res.status(500).json(err)
        }
    } //


    // LOGIN
    static async login(req, res, next) {
        try {
            let { email, password } = req.body

            console.log(email, password, '<<<<<<< REQ BODY DI SERVER');

            // CHECK IF EMAIL/PASSWORD IS EMPTY
            if (!email || !password) {
                throw { name: 'REQUIRED' }
            }

            // CHECK CUSTOMER
            let user = await User.findOne({ where: { email } })

            // CHECK IF USER EXIST
            if (!user) {
                throw {name: 'INVALID'}
            }

            // CHECK PASSWORD - bcrypt
            let isValid = comparePassword(password, user.password)

            // CHECK if VALID
            if (!isValid) {
                throw {name: 'INVALID'}
            }

            // GENERATE ACCESS_TOKEN
            let access_token = signToken({ id: user.id })

            res.status(200).json({
                access_token: access_token,
                email: user.email,
                isPremium: user.isPremium
            })
            
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
            // next(err)
        }
    } //


    // EDIT PROFILE
    static async editProfile(req, res, next) {
        try {


            console.log('MASUK editProfile');
            // EDIT

            res.status(200).json({
                message: 'MASUKKKKK editProfile'
            })
        } catch(err) {
            res.status(500).json(err)
        }
    } //


    // GET ONE USER
    static async getUser(req, res, next) {
        try {

            // let { id } = req.user
            let id = 2

            console.log(id, '<<<<<<< getUser');

            // CHECK CUSTOMER
            // let user = await User.findOne({ where: { email } })
            let user = await User.findByPk(id)


            console.log(user, '<<<<<< getUser');

            res.status(200).json({
                isPremium: user.isPremium
            })

        } catch(err) {
            res.status(500).json(err)
        }
    } //


    // GET ALL JOBS - API
    static async getAllJobs(req, res, next) {
        try {

            console.log('MASUK getalljobs CONTROLLER');
            // console.log(process.env.FINDWORK);

            let { data } = await axios({
                url: `https://findwork.dev/api/jobs/?search=software&source=weworkremotely`,
                method: 'GET',
                headers: {
                    'Authorization': 'Token ' + process.env.FINDWORK
                }
            })

            // console.log('HASIL DATAAAAAAA >>>>', data);

            res.status(200).json({
                count: data.count,
                results: data.results
            })
        } catch(err) {
            res.status(500).json(err)
        }
    } //

    // GET HISTORY
    static async getHistory(req, res, next) {
        try {
            let { id } = req.user

            console.log(id, '<<<<< ID getHistory');

            // CHECK CUSTOMER
            // let user = await User.findOne({ where: { email } })
            let history = await History.findAll({
                where: {
                    userID: id
                }
            })


            console.log(history, '<<<<<< getHistory');

            res.status(200).json(history)

        } catch(err) {
            res.status(500).json(err)
        }
    } //



    // APPLY JOB
    static async applyJob(req, res, next) {
        try {

            const { id } = req.user
            const { job } = req.body
            // console.log(job, '<<<<<<<<< job ini bosss');

            // FIND USER
            let user = await User.findByPk(id)

            console.log(user, '<<<<<<<<< applyJob');


            // CHECK PREMIUM or NOT
            if (!user.isPremium && user.applied >= 3 ) {
                throw { name: 'BUY_PREMIUM' };    
            }


            // UPDATE APPLIED
            let counter = user.applied + 1
            let apply = await User.update(
                { applied: counter },
                { where:
                    { id: req.user.id }
                }
            )


            // CREATE HISTORY - APPLY
            let history = await History.create({
                userID: id,
                job: job
            })

            console.log(history, '<<<<<<< INI HISTORYYYY');


            // POST

            

            res.status(200).json(user)
        } catch(err) {
            res.status(500).json(err)
        }
    } //


    // GENERATE MIDTRANS TOKEN
    static async genMidtransToken(req, res, next) {
        try {

            // console.log('MASUK genMidtransToken <<<<<<<');
            console.log(1, '<<<<<<<<');

            // FIND THE USER
            const checkUser = await User.findByPk(req.user.id)

            // console.log(checkUser.email, '<<<< checkUser for genMidtransToken');
            console.log(2, '<<<<<<<<');

            console.log(checkUser.isPremium, '<<<<<< checkUser.isPremium');

            // CHECK IF USER is PREMIUM
            if (checkUser.isPremium) {
                throw { name: 'ALREADY_PREMIUM' };
            }

            console.log(3, '<<<<<<<<');

            // Create Snap API instance - MIDTRANS
            let snap = new midtransClient.Snap({
                isProduction : false,
                serverKey : process.env.MIDTRANS_SERVER_KEY
            });

            console.log(4, '<<<<<<<<');

            // SET PARAMETERS - MIDTRANS
            let parameter = {
                "transaction_details": {
                    "order_id": "TRANSACTION_" + Math.floor(Math.random() * (9999999999 - 100000000 + 1) + 100000000),
                    "gross_amount": 1000000 // 1juta
                },
                "credit_card": {
                    "secure" : true
                },
                "customer_details": {
                    "email": checkUser.email,
                }
            }

            console.log(5, '<<<<<<<<');

            // SNAP TOKEN - MIDTRANS
            const midtransToken =  await snap.createTransaction(parameter)


            console.log(6, '<<<<<<<<');

            // console.log(midtransToken, '<<<<<<< midtransToken');

            res.status(200).json(midtransToken)
            // res.status(200).json(checkUser)

        } catch(err) {
            next(err)
            // res.status(500).json(err)
        }
    } //


    // GET PREMIUM
    static async getPremium(req, res, next) {
        try {

            console.log('MASUK PATCH getPremium');

            let user = await User.update(
                { isPremium: true },
                { where:
                    { id: req.user.id }
                }
                )

                console.log(user, '<<<<<< PATCH user');

            res.status(200).json(user)
        } catch(err) {
            res.status(500).json(err)
        }
    } //









} // Controllers



module.exports = Controller
const chai = require('chai')
const authController = require('../../src/controllers/auth.controler')

describe('AuthController', () => {
    describe.skip('isAuthorized', () => {
        it('Should return false if not authorized', () => {
            authController.setRoles(['user'])
            chai.expect(authController.isAuthorized('admin')).to.be.false
        })

        it('Should return true if authorized', () => {
            authController.setRoles(['user', 'admin'])
            chai.expect(authController.isAuthorized('admin')).to.be.true
        })
    })

    describe('isAuthorizedAsync', function () {
        it('Should return false if not authorized', function (done) {
            authController.setRoles(['user'])
            authController.isAuthorizedAsync('admin',
                function (isAuth) {
                    chai.expect(isAuth).to.be.false
                    done()
                })
        })

    })
})
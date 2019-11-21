using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MakeMyCode.Models;
using MakeMyCode.Business;
using System.Collections;

namespace MakeMyCode.Controllers
{
    public class AccountController : Controller
    {
        [HttpPost]
        public JsonResult Signup(UserSignUpModel model)
        {
            try
            {
                int signedUp = AccountBusiness.SignUp(model);
                return new JsonResult() { Data = new ArrayList() { signedUp } };
            }
            catch (Exception ex)
            {
                return new JsonResult() { Data = ex.Message };
            }
        }
        [HttpGet]
        public string test()
        {
            return "test";
        }
    }
}
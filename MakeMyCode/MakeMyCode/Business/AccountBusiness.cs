using MakeMyCode.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MakeMyCode.Business
{
    public class AccountBusiness
    {
        public static int SignUp(UserSignUpModel model)
        {
            using (var context = new MakeMyCodeEntities())
            {
                context.Users.Add(new Users() {
                    FirstName = model.firstName,
                    LastName = model.lastName,
                    Email = model.email,
                    Password = model.password,
                    IsActive = 1
                });
                return 0;
                //return context.SaveChanges();
            }
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MakeMyCode.Models
{
    public class UserSignUpModel
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string confirmPassword { get; set; }
    }
    public class UserModel
    {
        public int userId { get; set; }
        public string email { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string password { get; set; }
        public int isActive { get; set; }
    }
}
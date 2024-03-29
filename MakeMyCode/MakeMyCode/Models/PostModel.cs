﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MakeMyCode.Models
{
    public class PostModel
    {
        public int postId { get; set; }
        public string title { get; set; }
        public string summary { get; set; }
        public string body { get; set; }
        public string featuredImage { get; set; }
        public int userId { get; set; }
        public string authorName { get; set; }
        public int isActive { get; set; }
        public int isApproved { get; set; }
        public System.DateTime createdOn { get; set; }
        public System.DateTime lastUpdatedOn { get; set; }
    }
    public class UserLoginModel
    {
        public string email { get; set; }
        public string password { get; set; }
    }
}
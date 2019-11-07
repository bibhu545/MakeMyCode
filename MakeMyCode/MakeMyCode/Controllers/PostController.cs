using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MakeMyCode.Models;
using MakeMyCode.Business;

namespace MakeMyCode.Controllers
{
    public class PostController : Controller
    {
        [HttpPost]
        public JsonResult SavePost(PostModel model)
        {
            try
            {
                int saved = PostBusiness.CreatePost(model);
                return new JsonResult() { Data = saved };
            }
            catch (Exception ex)
            {
                return new JsonResult() { Data = ex.Message };
            }
        }
        public String GetName()
        {
            return "Hello MMC";
        }
    }
}
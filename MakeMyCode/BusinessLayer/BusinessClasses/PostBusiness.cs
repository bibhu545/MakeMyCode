using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModels;

namespace BusinessLayer
{
    public class PostBusiness
    {
        public static int CreatePost(PostModel post)
        {
            using (var context = new MakeMyCodeEntities())
            {
                context.Posts.Add(new Posts() {
                    Title = post.title,
                     Summary = post.summary,
                     Body = post.body,
                     FeaturedImage = post.featuredImage,
                     IsActive = post.isActive,
                     IsApproved = post.isApproved,
                     CreatedOn = DateTime.Now,
                     LastUpdatedOn = DateTime.Now,
                     UserId = post.userId
                });
                return context.SaveChanges();
            }
        }
    }
}

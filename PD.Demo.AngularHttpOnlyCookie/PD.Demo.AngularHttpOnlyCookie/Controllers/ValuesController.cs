using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PD.Demo.AngularHttpOnlyCookie.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet(Name = "setcookie")]
        public IActionResult Get()
        {
            var cookieValue = Request.Cookies["testhttpcookie"];
            // Process the cookie value
            return Ok();
        }
    }
}

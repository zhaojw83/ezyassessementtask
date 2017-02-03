using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Web.Http;
using System.Xml.Linq;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class RateController : ApiController
    {

        
        // GET api/rate/
        public List<Rate> Get()
        {
            List<Rate> rates = new List<Rate>();
            XElement rootNode = XElement.Load(GetXmlFile());

            //第一种查询
            var mynode = rootNode.Descendants("row").Where(m => m.Element("swift_code").Value.ToUpper().Equals("USD") || m.Element("swift_code").Value.ToUpper().Equals("EUR")); ;

            foreach (var item in mynode)
            {
                rates.Add(XmlToModel(item));
            }
            return rates;
        }

        // POST api/rate
        public void Post([FromBody]string value)
        {
        }

        // PUT api/rate/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/rate/5
        public void Delete(int id)
        {
        }
        /// <summary>
        /// Convert A XElement obj to Rate Obj
        /// </summary>
        /// <param name="el"></param>
        /// <returns></returns>
        private Rate XmlToModel(XElement el)
        {
            Rate rate = new Rate();
            rate.base_swift = el.Element("base_swift").Value;
            rate.buy_cash = el.Element("buy_cash").Value;
            rate.buy_tc = el.Element("buy_tc").Value;
            rate.CurrencyGuide = el.Element("CurrencyGuide").Value;
            rate.multiply = el.Element("multiply").Value;
            rate.sell_cash = el.Element("sell_cash").Value;
            rate.sell_tc = el.Element("sell_tc").Value;
            rate.swift_code = el.Element("swift_code").Value;
            rate.swift_name = el.Element("swift_name").Value;
            return rate;
        }
        /// <summary>
        /// Get the file path.
        /// </summary>
        /// <returns></returns>
        private string GetXmlFile()
        {
            string path = System.Web.HttpContext.Current.Server.MapPath(@".\..");

            return path + @"\App_Data\Rates.xml";
        }
    }
}

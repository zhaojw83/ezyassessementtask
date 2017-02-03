using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Rate
    {
        public string swift_code { get; set; }
        public string swift_name { get; set; }
        public string multiply { get; set; }
        public string buy_cash { get; set; }
        public string buy_tc { get; set; }
        public string sell_cash { get; set; }
        public string sell_tc { get; set; }
        public string CurrencyGuide { get; set; }
        public string base_swift { get; set; }
    }
}
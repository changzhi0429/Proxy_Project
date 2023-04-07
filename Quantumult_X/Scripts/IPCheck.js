// $response, $notify(title, subtitle, message), console.log(message)
// $response.statusCode, $response.headers, $response.body

if ($response.statusCode != 200) {
  $done(Null);
}

function Area_check(para) { //国家和地区重定义
  if(para=="香港" & RegN_check(obj['regionName'])=="" & City_check(obj['city'])=="") {
  return "中国 · 香港特别行政区"
  } else
  {
  if(para=="香港") {
  return "中国香港"
  } else
  {
  if(para=="澳门" & RegN_check(obj['regionName'])=="" & City_check(obj['city'])=="") {
  return "中国 · 澳门特别行政区"
  } else
  {
  if(para=="澳门") {
  return "中国澳门"
  } else
  {
  if(para=="台湾") {
  return "中国 · 台湾"
  } else
  {
  return para
  }
  }
  }
  }
  }
}

function RegNtit_check(temp) { //一级行政区重定义
  if(temp=="" & flags.get(obj['countryCode'])=="🇺🇸") {
  return ""
  } else
  {
  return "东京都"
  }
}

function RegNdes_check(temp) { //一级行政区重定义
  if(temp==obj['country']) {
  return ""
  } else
  {
  if(temp=="Tokyo") {
  return "东京都"
  } else
  {
  var re=/[^\u4e00-\u9fa5]/;
  if (re.test(temp)) {
  return ""
  } else
  {
  return temp
  }
  }
  }
}

function City_check(temp) { //二级行政区重定义
  if(temp==obj['country']) {
  return ""
  } else
  {
  if(temp==obj['regionName']) {
  return ""
  } else
  {
  if(temp=="Chiyoda") {
  return "千代田区"
  } else
  {
  var re=/[^\u4e00-\u9fa5]/;
  if (re.test(temp)) {
  return ""
  } else
  {
  return temp
  }
  }
  }
  }
}

function Num_check(para) {
  if(para) {
  return 'AS'+ parseInt(para.substring(1).substring(1))
  } else
  {
  return 'AS'+ parseInt(para.substring(1).substring(1))
  }
}

function Lat_check(para) {
  if(para<0){
  return -para + ' S'
  } else
  {
  return para + ' N'
  }
}

function Lon_check(para) {
  if(para<0){
  return -para + ' W'
  } else
  {
  return para + ' E'
  }
}


var flags = new Map([["AC","🇦🇨"],["AD","🇦🇩"],["AE","🇦🇪"],["AF","🇦🇫"],["AG","🇦🇬"],["AI","🇦🇮"],["AL","🇦🇱"],["AM","🇦🇲"],["AO","🇦🇴"],["AQ","🇦🇶"],["AR","🇦🇷"],["AS","🇦🇸"],["AT","🇦🇹"],["AU","🇦🇺"],["AW","🇦🇼"],["AX","🇦🇽"],["AZ","🇦🇿"],["BA","🇧🇦"],["BB","🇧🇧"],["BD","🇧🇩"],["BE","🇧🇪"],["BF","🇧🇫"],["BG","🇧🇬"],["BH","🇧🇭"],["BI","🇧🇮"],["BJ","🇧🇯"],["BM","🇧🇲"],["BN","🇧🇳"],["BO","🇧🇴"],["BR","🇧🇷"],["BS","🇧🇸"],["BT","🇧🇹"],["BV","🇧🇻"],["BW","🇧🇼"],["BY","🇧🇾"],["BZ","🇧🇿"],["CA","🇨🇦"],["CD","🇨🇩"],["CF","🇨🇫"],["CG","🇨🇬"],["CH","🇨🇭"],["CI","🇨🇮"],["CK","🇨🇰"],["CL","🇨🇱"],["CM","🇨🇲"],["CN","🇨🇳"],["CO","🇨🇴"],["CP","🇨🇵"],["CR","🇨🇷"],["CU","🇨🇺"],["CV","🇨🇻"],["CW","🇨🇼"],["CX","🇨🇽"],["CY","🇨🇾"],["CZ","🇨🇿"],["DE","🇩🇪"],["DG","🇩🇬"],["DJ","🇩🇯"],["DK","🇩🇰"],["DM","🇩🇲"],["DO","🇩🇴"],["DZ","🇩🇿"],["EA","🇪🇦"],["EC","🇪🇨"],["EE","🇪🇪"],["EG","🇪🇬"],["EH","🇪🇭"],["ER","🇪🇷"],["ES","🇪🇸"],["ET","🇪🇹"],["EU","🇪🇺"],["FI","🇫🇮"],["FJ","🇫🇯"],["FK","🇫🇰"],["FM","🇫🇲"],["FO","🇫🇴"],["FR","🇫🇷"],["GA","🇬🇦"],["GB","🇬🇧"],["GD","🇬🇩"],["GE","🇬🇪"],["GF","🇬🇫"],["GH","🇬🇭"],["GI","🇬🇮"],["GL","🇬🇱"],["GM","🇬🇲"],["GN","🇬🇳"],["GP","🇬🇵"],["GR","🇬🇷"],["GT","🇬🇹"],["GU","🇬🇺"],["GW","🇬🇼"],["GY","🇬🇾"],["HK","🇭🇰"],["HN","🇭🇳"],["HR","🇭🇷"],["HT","🇭🇹"],["HU","🇭🇺"],["ID","🇮🇩"],["IE","🇮🇪"],["IL","🇮🇱"],["IM","🇮🇲"],["IN","🇮🇳"],["IR","🇮🇷"],["IS","🇮🇸"],["IT","🇮🇹"],["JM","🇯🇲"],["JO","🇯🇴"],["JP","🇯🇵"],["KE","🇰🇪"],["KG","🇰🇬"],["KH","🇰🇭"],["KI","🇰🇮"],["KM","🇰🇲"],["KN","🇰🇳"],["KP","🇰🇵"],["KR","🇰🇷"],["KW","🇰🇼"],["KY","🇰🇾"],["KZ","🇰🇿"],["LA","🇱🇦"],["LB","🇱🇧"],["LC","🇱🇨"],["LI","🇱🇮"],["LK","🇱🇰"],["LR","🇱🇷"],["LS","🇱🇸"],["LT","🇱🇹"],["LU","🇱🇺"],["LV","🇱🇻"],["LY","🇱🇾"],["MA","🇲🇦"],["MC","🇲🇨"],["MD","🇲🇩"],["MG","🇲🇬"],["MH","🇲🇭"],["MK","🇲🇰"],["ML","🇲🇱"],["MM","🇲🇲"],["MN","🇲🇳"],["MO","🇲🇴"],["MP","🇲🇵"],["MQ","🇲🇶"],["MR","🇲🇷"],["MS","🇲🇸"],["MT","🇲🇹"],["MU","🇲🇺"],["MV","🇲🇻"],["MW","🇲🇼"],["MX","🇲🇽"],["MY","🇲🇾"],["MZ","🇲🇿"],["NA","🇳🇦"],["NC","🇳🇨"],["NE","🇳🇪"],["NF","🇳🇫"],["NG","🇳🇬"],["NI","🇳🇮"],["NL","🇳🇱"],["NO","🇳🇴"],["NP","🇳🇵"],["NR","🇳🇷"],["NZ","🇳🇿"],["OM","🇴🇲"],["PA","🇵🇦"],["PE","🇵🇪"],["PF","🇵🇫"],["PG","🇵🇬"],["PH","🇵🇭"],["PK","🇵🇰"],["PL","🇵🇱"],["PM","🇵🇲"],["PR","🇵🇷"],["PS","🇵🇸"],["PT","🇵🇹"],["PW","🇵🇼"],["PY","🇵🇾"],["QA","🇶🇦"],["RE","🇷🇪"],["RO","🇷🇴"],["RS","🇷🇸"],["RU","🇷🇺"],["RW","🇷🇼"],["SA","🇸🇦"],["SB","🇸🇧"],["SC","🇸🇨"],["SD","🇸🇩"],["SE","🇸🇪"],["SG","🇸🇬"],["SI","🇸🇮"],["SK","🇸🇰"],["SL","🇸🇱"],["SM","🇸🇲"],["SN","🇸🇳"],["SR","🇸🇷"],["ST","🇸🇹"],["SV","🇸🇻"],["SY","🇸🇾"],["SZ","🇸🇿"],["TC","🇹🇨"],["TD","🇹🇩"],["TG","🇹🇬"],["TH","🇹🇭"],["TJ","🇹🇯"],["TL","🇹🇱"],["TM","🇹🇲"],["TN","🇹🇳"],["TO","🇹🇴"],["TR","🇹🇷"],["TT","🇹🇹"],["TV","🇹🇻"],["TW","🇨🇳"],["TZ","🇹🇿"],["UA","🇺🇦"],["UG","🇺🇬"],["UK","🇬🇧"],["UM","🇺🇲"],["US","🇺🇸"],["UY","🇺🇾"],["UZ","🇺🇿"],["VA","🇻🇦"],["VC","🇻🇨"],["VE","🇻🇪"],["VG","🇻🇬"],["VI","🇻🇮"],["VN","🇻🇳"],["VU","🇻🇺"],["WS","🇼🇸"],["YE","🇾🇪"],["YT","🇾🇹"],["ZA","🇿🇦"],["ZM","🇿🇲"],["ZW","🇿🇼"]])

var body = $response.body;
var obj = JSON.parse(body);
var title = flags.get(obj['countryCode']) + ' '+ Area_check(obj['country']) + ' '+ RegNtit_check(obj['regionName']) + ' ' + City_check(obj['city']);
var subtitle = obj['org'] + ' · ' + Num_check(obj['as']) + ' · ' + obj['query'];
var ip = obj['query'];
var description = '\n' + '--------------------------' + '\n\n\n' + Area_check(obj['country']) + ' '+ RegNdes_check(obj['regionName']) + ' ' + City_check(obj['city']) + '\n\n' + obj['timezone'] + '\n\n' + obj['query'] + '\n\n' + Lat_check(obj['lat']) + '  ,  '+ Lon_check(obj['lon']) + '\n\n' + obj['isp'] + '\n\n' + obj['org'];


$done({title, subtitle, ip, description});

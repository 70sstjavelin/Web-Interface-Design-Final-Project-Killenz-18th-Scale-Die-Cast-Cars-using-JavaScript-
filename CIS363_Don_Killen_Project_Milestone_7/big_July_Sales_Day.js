/* Function BigSaleDays()
   Purpose: Calculate the number of days between Clearance Day Sale-July 31st and a current date

   Variables
   CheckDay: A date object containing the given date
   XYear: The 4-digit year value of the given date
   XDay: July 31 in the year of the given date
   DayCount: The number of days between July 31st and the given date
*/

function BigSaleDays(CheckDay) {
   var XYear=CheckDay.getFullYear();
   var XDay=new Date("July, 31, 2014");
   XDay.setFullYear(XYear);
   var DayCount=(XDay-CheckDay)/(1000*60*60*24);
   DayCount=Math.round(DayCount);
   return DayCount;
}
// 날짜와 요일 반환하기 

function getTime(){
    let date = new Date();
    let v_year = date.getFullYear()+" ";
    let v_month = date.getMonth() + 1 +"";
    let v_date = date.getDate() +"";
    let v_hour = date.getHours() +"";
    let v_min = date.getMinutes() +"";

    let v_result = v_year.padStart(2,'0');
    v_result += v_month.padStart(2,'0');
    v_result+="." + v_date.padStart(2,'0');
    v_result+=" " + v_hour.padStart(2,'0');
    v_result+=":" + v_min.padStart(2,'0');

    return v_result;

}

function getDayOfWeek(){
	
    const dayOfWeek = new Date().getDay(); 
    
    //0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토
	if(dayOfWeek ==1){
		weekDay = "월"
    }else if (dayOfWeek ==2){
        weekDay = "화"
    }else if (dayOfWeek ==3){
        weekDay = "수"
    }else if (dayOfWeek ==4){
        weekDay = "목"
    }else if (dayOfWeek ==5){
        weekDay = "금"
    }else if (dayOfWeek ==6){
        weekDay = "토"
    }else{
        weekDay = "화"
    }
    return weekDay;
}

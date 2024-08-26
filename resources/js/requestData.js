
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



let today = '';
let dayOfWeek ='';
    today= getTime();
    dayOfWeek= getDayOfWeek();
    localStorage.setItem('today',today)
    localStorage.setItem('dayOfWeek',dayOfWeek)



// 버튼 클릭시 데이터 새로 받아오기 

let xhr = new XMLHttpRequest();


/* Javascript 샘플 코드 */


let pageNo = 1;
let v_array = [];

let v_progBox = document.getElementsByClassName('progress-box')[0];
function f_reqData() {

    v_progBox.style.visibility = 'visible';

    let url = 'http://apis.data.go.kr/6300000/pis/parkinglotIF'; /*URL*/
    let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'inf%2BkA3LS0rJF41LHPxAxO%2FmKJuNk4XkAPPh6oAGuBoeN899uH5w0XKXOWEd4ZD83OhSccygon2F6FeflzmDgQ%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('50'); /**/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + pageNo; /**/



    xhr.open('GET', url + queryParams);


    xhr.onload = () => {
        let domParser = new DOMParser();
        // console.log(xhr.response);

        let v_x2js = new X2JS();
        v_json = v_x2js.xml_str2json(xhr.response);
        let test_data = (v_json)


        if (pageNo < 16) {
            v_array.push(test_data)
            pageNo++;
            f_reqData();
        } else {
            localStorage.setItem('parkingArea', JSON.stringify(v_array))
            v_progBox.style.visibility = 'hidden';
        }
        console.log((v_array));


        console.log('통신요청했음');
        
        


    };
    xhr.send();


}
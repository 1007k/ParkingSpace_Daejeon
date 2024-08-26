
// 로컬에 저장된 데이터를 item만 꺼내서 담기
// 24.08.20. 기준 723개 723~750까지는 빈 json담김

let v_parkingArea = localStorage.getItem('parkingArea')


    let v_data = JSON.parse(v_parkingArea) 
    // console.log(v_data)

    let v_item = [];
    for(let i =0; i < v_data.length ; i++){
        for(let k =0; k < 50 ; k++){
        let item =v_data[i]['response']['body']['item'][k]

        v_item.push(item)
        }
    };

    console.log(v_item)

window.onload = function () {
    var view = this.document.getElementById("view");
    var wform = this.document.getElementById("wform");


    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var list = JSON.parse(this.responseText);
        bind(list)
    };
    xhr.open("get", "api/list");
    xhr.send();


    function bind(list) {

        var listHTML = "<table class='n-table n-table-border:column border'>";
        listHTML+="<tr>";
        listHTML+="<td>번호</td>";
        listHTML+="<td>제목</td>";
        listHTML+="<td>작성자</td>";
        listHTML+="<td>작성일</td>";
        listHTML+="<td>조회수</td>";
        listHTML+="</tr>";

        //$.each(data, function(index,board){ 제이쿼리 포이치
        // list.forEach(board => {            자바스크립트 포이치
        //     listHTML+="<tr>";
        //     listHTML+=`<td>${board.idx}</td>`;
        //     listHTML+=`<td>${board.title}</td>`;
        //     listHTML+=`<td>${board.writer}</td>`;
        //     listHTML+=`<td>${board.regDate}</td>`;
        //     listHTML+=`<td>${board.viewCount}</td>`;
        //     listHTML+="</tr>";`
        // });
        for(var board of list) {
            listHTML+="<tr>";
            listHTML+=`<td>${board.idx}</td>`;// 씌발~ 객체 속성값을 꽂을려면 "" 쓰면안되고 ``(백틱)써야됨
            listHTML+=`<td>${board.title}</td>`;
            listHTML+=`<td>${board.writer}</td>`;
            listHTML+=`<td>${board.regDate}</td>`;
            listHTML+=`<td>${board.viewCount}</td>`;
            listHTML+="</tr>";
        };
        listHTML+="<tr>";
        listHTML+="<td colspan='5'>";
        listHTML+="<Button class='n-btn n-btn-color:sub' onclick='goForm()'>글쓰기</Button>"
        listHTML+="</td>";
        listHTML+="</tr>";
        listHTML+="</table>";
        // $("#view").html(listHTML); 제이쿼리
        view.insertAdjacentHTML("beforeend", listHTML);
        view.style.display = "block";
        wform.style.display = "none";
    }
};

function goForm() {
    view.style.display = "none";
    wform.style.display = "block";
    // $('#view').css("display","none");
    // $('#wform').css("display","block");
}
function goList() {
    view.style.display = "block";
    wform.style.display = "none";
    // $('#view').css("display","none");
    // $('#wform').css("display","block");
}

function goInsert() {
    // var title = document.getElementById("title");
    // var content = document.getElementById("content");
    // var writer = document.getElementById("writer");
    // var frm = document.getElementById("frm");
    // var fdata= frm.serialize
    // const form = document.getElementById("frm");
    // const formData = new FormData(form);
    // var fData=$("#frm").serialize();
    // alert(fData);
    // for (let [key, value] of formData.entries()) {
    //     console.log(key, value);  fromData 를 키 값으로 확인
    const form = document.querySelector("#frm");

    /*FormData는 웹 API의 내장 객체입니다. 이 객체는 form 필드와 그 값을 관리하는데 사용됩니다.
    이를 통해 form field의 key/value 쌍을 쉽게 생성하고, 이 정보를 - 예를 들어 XMLHttpRequest를 사용하여 - 서버로 보낼 수 있습니다.
    new FormData(form) 구문은 HTML <form> 요소를 인자로 받아, 해당 form 요소 내부의 모든 필드와 그 값을 key/value 쌍으로 갖는 FormData 객체를 생성합니다.
    매개변수로는 form 요소의 참조 (<form> 태그를 포함한 노드 참조)를 전달합니다.
    따라서 const formData = new FormData(form); 코드는 현재 HTML 문서에서 form ID를 가진 <form> 요소의 모든 필드와 값을 포함하는 FormData 객체를 생성합니다.
    이 formData 객체는 보통 서버로 데이터를 전송하는 데 사용됩니다.
    FormData 객체는 append, delete, get, getAll, has, set, 등 다양한 메서드를 제공합니다. 이들 메서드를 사용해 FormData 객체의 값을 검색, 수정, 추가, 삭제할 수 있습니다.*/
    const formData = new FormData(form);
    console.log(formData.get('title'));
    // formData 객체를 문자열로 변환
    /*
    new URLSearchParams(formData).toString() 의 코드는 FormData 객체를 URL 인코딩된 문자열로 변환하는데 사용됩니다.
    여기에서 URLSearchParams 생성자는 검색 매개변수를 다루는 데 사용되는 객체를 만듭니다. 이 생성자에 FormData 객체를 넣으면,
    이 객체의 각 필드 (key와 value)가 인코딩되어 검색 파라미터 형식 (key=value&key2=value2&...)의 문자열로 만들어집니다.
    그런 다음 toString() 메서드를 사용하여 이 검색 파라미터를 문자열로 변환합니다. 이 문자열은 보통 URL의 일부로 사용되거나, 서버로 보낼 데이터를 인코딩하는 데 사용됩니다.
    요약하면, const formDataString = new URLSearchParams(formData).toString();는 form 필드와 그 값을 URL 인코딩된 문자열로 변환하는 코드입니다.
    이렇게 변환된 문자열은 URL의 일부로 사용되거나 HTTP 요청의 본문으로 사용될 수 있습니다.*/
    const formDataString = new URLSearchParams(formData).toString();

    // 변환된 문자열을 알림창에 출력
    // alert(formDataString);
    // $.ajax({
    //     url : "boardInsert",
    //     type : "post",
    //     data : formDataString,
    //     success : onload,
    //     error :function (){
    //         alert("error");
    //     }
    // });
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "boardInsert");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(formDataString);
    // xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.send(JSON.stringify(formData))
``
    xhr.onload = function() {
        if (xhr.status === 200) {
            // onload();
            // location.href = "/";
            // window.location.href = window.location.href;
            location.reload()
        } else {
            alert("error");
        }
    };

    xhr.onerror = function() {
        alert("error");
    };
}




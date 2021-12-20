import $ from 'jquery';
import jQuery from 'jquery';
// import Swiper from 'swiper';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

//input text 공통함수
 var inputFocus = function(){
    $(".ipt-type").off().on("focusin", function(){
        $(this).parents(".ipt-wrap").removeClass("error");        
    });
}

 //주요버튼 클릭시 feedback 모션을 위한 함수처리
 var btnAction = function (){   
    $(".js-btn-active").off().on("click",function(e){
        var touchX, touchY;
        var scaleSize = ($(this).innerWidth()/$(this).innerHeight()) + 1;
        touchX = e.offsetX;
        touchY = e.offsetY;
        cssValChange("ckx", touchX + "px");
        cssValChange("cky", touchY + "px");
        cssValChange("size", scaleSize);
        $(this).addClass("active").delay(300).queue(function(){
            $(this).removeClass("active");
            $(this).dequeue();
        });
    });
}

//css x,y 변수 전달. 200601 수정
function cssValChange(id, value){
    const style = document.documentElement.style;
    style.setProperty('--'+id, value);
}

//toggle 리스트 실행함수
var toggleList = function(){
    $(".js-toggle-type > li > a").off().on("click", function(e){
        e.preventDefault();
        if(!$(this).parent().hasClass("on")){
            $(this).parent().addClass("on");
        }else{
            $(this).parent().removeClass("on");
        }
    });
}

//toggle 리스트 실행함수2(함수형)
function toggleList2(t){
    let obj = $(t),
        contDiv = $(t).attr("href");
    event.preventDefault();
    // console.log(obj, contDiv);
    if(obj.parents("li").hasClass("on")){
        obj.parents("li").removeClass("on");
    }else{
        obj.parents("li").addClass("on");
    }
}

//tab 리스트 실행함수
var tabList = function(){
    $(".js-tab-list > li > a").off().on("click", function(e){
        var $cont = $($(this).attr("href"));
        e.preventDefault();
        if($(this).hasClass("stop")) return false; //일시적 비활성활를 위한 클래스
        if(!$(this).hasClass("on")){
            $(this).addClass("on").parent().siblings().find("> a").removeClass("on");
            $(".js-tab-cont").hide();
            $cont.show();
        }      
    });
}

//tabButton 탭 버튼 관련 설정 //개발 실제 적용시 렌더링 처리로 인해 미사용 tabBtn2로 대체
var tabButton = function(){
    $("[class*='tab_type'] li a").off().on("click", function(e){
        var hash = this.hash;
        $(this).closest("ul").find("li").removeClass("on");
        $(this).closest("li").addClass("on");
        $(hash).show().siblings(".tab_cont").hide();
        //2018-04-30 수정 | 보장내역 tab_type1 클릭 시, 스크롤 상단으로 이동하도록 변경
        if($(this).closest("div.popup_table_st6").length && $(this).closest(".tab_type2").length != 1){
            // CommonFn.moveScrollTo("top");
        }
        e.preventDefault();
    });
}

//toggle 리스트 실행함수
function tabBtn2(t){
    let obj = $(t),
        contDiv = $(t).attr("href");
    event.preventDefault();
    // console.log(obj, contDiv);
    if(obj.parent().hasClass("on")) return false;
    obj.parent().addClass("on").siblings().removeClass("on");
    obj.parens(".tab_type2_wrap").next(".tab_cont_wrap").find(".tab_cont").hide();
    $(contDiv).fadeIn(300);
}

//dicount tooltip
var tipOpen2 = function(){
    tipFunc.open(".js-discount", "Y");
}
//tip 설정 공통함수
var tipFunc = {
    open: function(t, dim){//이벤트 객체, dim 여부 Y
        var obj = t;
        $(obj).find(".js-tip").off().on("click", function(e){
            e.preventDefault();
            if(!$(this).parents(obj).hasClass("on")){
                $(obj).removeClass("on");
                $(this).parents(obj).addClass("on");
            }else{
                $(this).parents(obj).removeClass("on");
            }      
            if(dim){
                $(".page_dim").addClass("on");
            }
        });
        $(obj).find(".cls").off().on("click", function(){
            $(this).parents(obj).removeClass("on");
            if(dim){
                $(".page_dim").removeClass("on");
            }
        });
    }
}
//tooltips text (총 30가지)
var tooltips = [
    // 공통
    {num:0, tit:"특약 보험료 안내", desc:"보험료지급면제특약 보험료가 포함되어 있습니다. 보험료지급면제특약은 보험기간 중 종피보험자(가입부모)가 사망하거나 장해지급률 50% 이상의 장해 상태가 되었을 경우에는 다음 회부터 주계약 기본 보험료 및 특약보험료의 납입을 면제합니다."},
    {num:1, tit:"공시이율 안내", desc:"세전, 매월 변동금리, 매월 위험보험료 및 경과이자 비례 사업비 차감 후 경과 일수로 부리"},
    {num:2, tit:"월 기본보험료 안내", desc:'<ul class="list-type02"><li>최소 5만원 ~ 최대 1천만원 까지 납입 가능</li><li>동일 상품 계약 보유 시, 합산 기준 월 기본보험료 최대 1천만원</li></ul>'},
    {num:23, tit:"보험기간이란?", desc:"보험계약에 따라 보장을 받을 수 있는 일정기간을 말합니다.<br>예를 들어, 30세에 보험가입을 하면서 보험기간을 60세까지로 정한다면 30세부터 60세 계약해당일 전일 사이에 보험사고가 발생할 경우에 보험의 혜택을 받으실 수 있습니다."},
    {num:24, tit:"납입기간이란?", desc:"보험료 납입기간은 보험료를 내는 기간이라고 생각하시면 됩니다. 예를 들어 납입기간이 10년이라면 10년의 기간 동안 보험료를 내게 됩니다."},
    {num:25, tit:"만기환급률이란?", desc:"보험의 납입기간 동안 납입하신 보험료에 대하여 보험 계약의 보장기간 완료시점(만기시)에 보험사로부터 돌려받는 금액을 만기환급금이라고 하며, 그 비율을 만기환급률이라고 합니다.<br>만기환급률이 높을수록 만기시에 돌려받는 금액은 많지만 납입하는 보험료도 높아지고 만기환급률이 낮을수록 만기시에 돌려받는 금액은 적지만 내는 보험료는 낮아집니다."},
    //어린이저축
    {num:3, tit:"중도인출 설계 시 보험료 산출 안내", desc:"월 기본보험료(주계약 보험료)는 보험기간 동안 이 보험의 평균공시이율과 현재공시이율 중 낮은 이율로 가정하여 산출됩니다. 즉, 평균공시이율과 현재공시이율 중 낮은 이율로 가정 시 목표하신 교육자금을 해당시점에 인출하실 수 있도록 월 기본보험료(주계약 보험료)가 산출됩니다.<br>자세한 내용은 중도인출 계획 및 상품설명서를 참고하시기 바랍니다."},
    {num:4, tit:"중도인출 시 유의사항", desc:'<ul class="list-type02"><li>교육자금은 보험금지급이 아닌 해당 기간에 고객님께서 직접 중도 인출하시는 금액을 말합니다.</li><li>인출의 편의를 돕기 위해 교육자금 중도인출 알림 e 서비스를 제공합니다.</li><li>계획하지 않은 중도인출을 하실 경우, 가입 시 설계한 교육자금 중도인출 계획은 실행되지 않습니다.</li></ul>'},
    {num:27, tit:"교육자금 중도인출 설계란?", desc:'교육자금은 보험금 지급이 아닌 해당 기간에 고객님께서 직접 중도 인출하는 금액을 말합니다. 단, 계획되지 않은 중도인출 시 가입 시 설계한 교육자금 중도인출 계획은 실행되지 않습니다.<ul class="list-type02 mt20"><li>인출 수수료는 인출 금액의 0.2%와 2,000원 중 적은 금액으로 부과하며, 보험 연도 기준 연 4회까지는 인출 수수료를 면제함</li><li>교육자금 인출 시, 1회당 인출 가능한 최고 한도는 인출 당시 해지환급금(보험계약대출의 원금과 이자를 차감한 금액)을 초과할 수 없으며, 보험계약일부터 10년이 지나지 않은 계약의 총 교육자금 인출 금액은 계약자가 실제 납입한 보험료 총액을 초과할 수 없음</li><li>자세한 사항은 이 계약의 약관 제 38조(교육자금 인출에 관한 사항)참조</li></ul>'},
    //연금저축보험
    {num:5, tit:"관련 세법 안내", desc:'<ul class="list-type02"><li>연간 납입보험료 중 400만원 한도로 지방소득세포함 세액공제율 13.2%, 또는 16.5% 적용<br>(단, 총 급여액 1억 2천만원 또는 종합소득액 1억원 초과자 연간 납입보험료 300만원 한도 적용)</li><li>13.2% 대상자 : 총 급여 5천5백만원 또는 종합소득금액 4천만원 초과자</li><li>16.5% 대상자 : 총 급여 5천5백만원 또는 종합소득금액 4천만원 이하 거주자</li></ul>'},
    {num:6, tit:"종신연금형이란?", desc:"평생 연금수령[종신연금형]은 사망할 때까지 평생 동안 연금을 받는 형태 입니다. 일찍 사망하는 경우에는 연금수령기간이 짧아져 손해라고 생각하실 수 있지만 10년, 20년, 100세의 보증기간이 있어서 일찍 사망할 경우 남은 보증기간만큼 유족에게 연금이 지급됩니다. 보증기간이 짧으면 매번 받는 연금수령액이 많아지고 길면 적어지게 됩니다."},
    {num:7, tit:"확정연금형이란?", desc:"확정기간 연금수령[확정연금형]은 적립금을 일정 기간 동안 나누어 연금을 받는 형태입니다. 10년, 20년, 100세의 기간을 선택할 수 있으며, 기간이 짧을수록 매년 받는 연금액이 커집니다. 그 대신 가입시 정한 기간이 종료되면 더 이상 연금을 받을 수 없으므로 예상보다 오래 살 경우 연금이 중단되는 문제가 생길 수 있으므로 신중하게 선택하셔야 합니다."},
    {num:8, tit:"공시이율 안내", desc:"2021년 6월 기준, 세전, 매월 변동금리, 매월 사업비 차감 후 경과 일수로 부리)"},
    {num:9, tit:"월 기본보험료 안내", desc:'<ul class="list-type02"><li>최소 3만원 ~ 최대 150만원 까지 납입 가능</li><li>현 연금 보유자의 납입액은 월 평균 23만원입니다. 연금보험은 납입한 보험료에 따라 향후에 받는 적용이율을 반영하여 연금으로 수령할 수 있기 때문에, 경제적 여력이 되는 만큼 충분히 납입하셔도 됩니다.</li></ul>'},
    {num:10, tit:"예상연금수령액 안내", desc:"예상연금수령액은 공시이율, 연금지급유형, 계약내용의 변경, 추가납입 여부 등에 의해 변동될 수 있습니다."},
    {num:11, tit:"연금수령방식 설정 TIP", desc:"오랜기간 장수를 하신다고 생각하신다면 평생 연금을 받는 종신연금형의 비율을 높게, 짧은 기간동안 연금을 받고 많은 연금액을 받으시려면 확정기간 동안 연금을 받는 확정연금형의 비율을 높게 설정하시면 됩니다."},
    {num:12, tit:"보증기간이란?", desc:"계약자가 사망 시에도 피보험자 생존 여부에 상관없이 선택하신 보증기간 만큼 지급을 받으실 수 있습니다."},
    //어린이보장
    {num:13, tit:"재해상해란?", desc:"교통재해 장해급여금 : 1억 X 해당 장해지급률<br>일반재해 장해급여금 : 5,000만원 X 해당 장해지급률"},
    {num:14, tit:"일반암이란?", desc:"백혈병 및 골수암을 제외한 암(기타피부암, 갑상선암 제외)"},
    {num:15, tit:"소액암이란?", desc:"갑상선암, 기타피부암, 경계성종양, 제자리암"},
    {num:16, tit:"재해골절이란?", desc:"재해를 직접적인 원인으로 「골절」로 진단이 확정되었을 경우이며, 치아파절은 제외"},
    {num:17, tit:"입원비", desc:'<ul class="list-type02"><li>질병 및 재해 입원비 : 4일 이상 입원 시 1일당 2만원</li><li>어린이 주요 10대 질병(폐렴, 창자감염질환, 특정 감염병, 탈장 및 장폐색, 수막염, 충수염, VDT 증후군 관련, 천식, 아토피, 알레르기성 비염 등)입원비 : 4일 입원 시 1일당 2만원</li><li>뼈 및 관절연골, 뇌 및 중추신경계통, 림프, 조혈 및 관련조직 등에 발생하는 암</li></ul>'},
    {num:18, tit:"수술비", desc:'<ul class="list-type02"><li>수술 1회당 1종 10만원, 2종 30만원, 3종 50만원, 4종 100만원, 5종 300만원 지급</li><li>1~5종 수술 분류표에서 정하는 수술을 받을 경우에 해당</li></ul>'},
    {num:30, tit:"주산기질환 특약 보장 안내", desc:"임신 사실을 확인한 순간부터 출산 전까지 태아 가입이 가능하며, 가입한 날부터 출생전후 기간에 기원한 주산기질환의 입원/수술을 가입시점부터 출생예정일+1년까지 보장합니다.<br><br>태아 가입 당시의 보험료는 피보험자 남자 0세를 기준으로 적용된 보험료에 주산기특약(1년만기) 일시납 보험료가 추가된 보험료입니다. <br><br>1년 후부터는 출생 시 피보험자의 성별이 여자일 경우 “보험료 및 책임준비금 산출방법서”에서 정하는 방법에 따라 보험료가 변경되고 차액이 있는 경우 돌려받으실 수 있습니다.(세부 내용 약관 참조)"},
    {num:31, tit:"다자녀 할인 혜택 안내", desc:"상품 가입 시 피보험자 본인을 포함한 형제자매가 2인인 경우 보험료의 3%를, 3인 이상인 경우 보험료의 5%를 할인합니다. (라이프플래닛 홈페이지 또는 APP 내 마이페이지에서 신청)"},
    //비갱신암
    {num:19, tit:"고액암이란?", desc:"뼈 및 관절연골, 뇌 및 중추신경계통, 림프, 조혈 및 관련조직 등에 발생하는 암"},
    {num:20, tit:"일반암이란?", desc:"고액암, 유방암/전립선암, 소액암 이외의 암"},
    {num:21, tit:"저축목적으로 가입할 경우", desc:"저축목적으로 가입할 경우 다른 상품을 선택하는 것이 유리합니다."},
    {num:22, tit:"해지환급금", desc:"이 상품은 보험료 납입기간 중 중도해지 시 해지환급금이 없습니다."},
    //저축보험
    {num:26, tit:"만기유지보너스란?", desc:"만기유지보너스 해당금액은 1·2·3년만기 가입 시 만기시점 기본보험료 납입에 따른 계약자적립금의 0.3%, 10년만기 가입 시 만기시점 기본보험료 납입에 따른 계약자적립금의 1.8%입니다."},
    // 여성건강
    {num:28, tit:"3대암이란?", desc:'위의 악성신생물(암), 간 및 간내 담관의 악성 신생물(암), 기관지 및 폐의 악성 신생물(암) 등으로 세부 내용 약관 참조'},
    {num:29, tit:"여성 4대 중증 질환이란?", desc:'중증루푸스신염, 중증재상불량성빈혈, 뇌출혈, 급성심근경색증 등으로 세부 내용 약관 참조'},
    
    {num:0, tit:"###", desc:"###"},
    {num:0, tit:"###", desc:'<ul class="list-type02"><li>###</li><li>###</li><li>###</li></ul>'},
]

//tooltip 비활성화
var toolTipCls = function(){//target
    $(".tip-type a.cls").on("click", function(e){
        e.preventDefault();
        $(this).parents(".js-define").removeClass("on");
    });
}

var toolFunction = function(){
    $(".js-tip").on("click", function(e){
        e.preventDefault();
        $(this).parents(".js-define").addClass("on");
    });
    toolTipCls();
}


//picker 안내문구
const pickerTips = [
    //공통
    {num:0, tit:"만기환급률 0%(순수보장형)으로 가입하기", desc:"만기환급율은 보장기간 완료시점(만기 시)에 납입하신 보험료를 돌려 받는 비율을 말합니다. 낸 보험료가 아까워 돌려받기를 원하는 분들이 많지만, 돌려받기 위해 그만큼 보험료를 많이 내야 합니다. 물가상승률을 고려했을 때 손해일 확률이 높으므로 만기환급률 0%로 가입하는 것을 추천합니다."},
    {num:1, tit:"보험가입기간과 동일하게", desc:"보험료 납입기간은 보험료를 내는 기간입니다. 납입기간이 10년이라면 10년동안 보험료를 내게 됩니다.<br>납입기간은 경제적 여력이 되는 기간 동안을 정하시는 것이 일반적이며, 통상 보험가입기간과 동일하게 보험료 납입기간을 설계하시는 것을 추천 드립니다."},
    {num:21, tit:"보험기간은 최대한 길게", desc:'보험기간은 보장 받을 수 있는 기간을 말합니다. 암에 대한 위험은 나이가 들수로 커지기 때문에 가입 연령에 따라 보험료가 오를 수 있습니다. 나이, 병력 등으로 재가입이 불가능 할 수도 있으니 최대한 길게 가입하는 것을 추천합니다.'},

    //연금저축
    {num:2, tit:"연금개시나이는 언제부터가 적당한가요?", desc:'예상하는 은퇴 나이부터 받는 것이 적당합니다. 평균적으로 64.1세이며, 연금개시 시점을 60세로 정하시는 고객이 가장 많습니다.<p class="mt20">* 연금개시나이는 계약 이 후 변경가능하며, 가입 시 설정한 나이보다 낮은 나이로만 변경 가능합니다.  (예 : 가입 시 65세로 설정 한 경우 → 64세 이하로만 변경 가능)</p>'},
    {num:3, tit:"목표납입기간은 어떻게 되나요?", desc:"목표납입기간은 5년에서 연금개시전까지 원하는 기간으로 설정하실 수 있으며, 의무 목표납입기간은 5년(60회)입니다. 설정하신 목표납입기간 동안 매월 보험료를 자동이체 됩니다."},
    {num:4, tit:"종신연금형이란?", desc:"평생 연금수령[종신연금형]은 사망할 때까지 평생 동안 연금을 받는 형태 입니다. 일찍 사망하는 경우에는 연금수령기간이 짧아져 손해라고 생각하실 수 있지만 10년, 20년, 100세의 보증기간이 있어서 일찍 사망할 경우 남은 보증기간만큼 유족에게 연금이 지급됩니다. 보증기간이 짧으면 매번 받는 연금수령액이 많아지고 길면 적어지게 됩니다."},
    {num:5, tit:"확정연금형이란?", desc:"확정기간 연금수령[확정연금형]은 적립금을 일정 기간 동안 나누어 연금을 받는 형태입니다. 10년, 20년, 100세의 기간을 선택할 수 있으며, 기간이 짧을수록 매년 받는 연금액이 커집니다. 그 대신 가입시 정한 기간이 종료되면 더 이상 연금을 받을 수 없으므로 예상보다 오래 살 경우 연금이 중단되는 문제가 생길 수 있으므로 신중하게 선택하셔야 합니다."},
    {num:6, tit:"보증기간이란?", desc:"계약자가 사망 시에도 피보험자 생존 여부에 상관없이 선택하신 보증기간 만큼 지급을 받으실 수 있습니다."},
    //어린이 저축
    {num:7, tit:"언제까지가 적당한가요?", desc:"보험기간이란 보장을 받을 수 있는 일정기간을 말합니다.<br>자녀 교육 자금이 필요한 기간까지를 보험기간으로 설정하세요. 자녀 대학등록금 마련이 목적이라면 대학을 졸업하는 22세까지로 설정하세요. 필요자금이 생기면 중도인출을 활용하실 수 있어요."},
    {num:8, tit:"보험료납입면제특약 이란?", desc:"보험기간 중 종피보험자(가입부모)가 사망하거나 장해지급률 50% 이상의 장해 상태가 되었을 경우에는 다음 회부터 주계약 기본보험료 및 특약보험료의 납입을 면제합니다."},
    {num:9, tit:"대학교 등록금", desc:'<ul class="list-type02"><li>인출시기 : 19세 ~ 22세</li><li>인출횟수 : 매년 (최대 총4회)</li></ul>'},
    {num:10, tit:"초등 교육비", desc:'<ul class="list-type02"><li>인출시기 : 7세 ~ 12세</li><li>인출횟수 : 매년 (최대 총6회)</li></ul>'},
    {num:11, tit:"중등 교육비", desc:'<ul class="list-type02"><li>인출시기 : 13세 ~ 15세</li><li>인출횟수 : 매년 (최대 총3회)</li></ul>'},
    {num:12, tit:"고등 교육비", desc:'<ul class="list-type02"><li>인출시기 : 16세 ~ 18세</li><li>인출횟수 : 매년 (최대 총3회)</li></ul>'},
    {num:13, tit:"어학연수/유학준비자금", desc:'<ul class="list-type02"><li>인출시기 : 19세 ~ 22세 중 선택</li><li>인출횟수 : 1회</li></ul>'},
    {num:14, tit:"사회진출자금", desc:'<ul class="list-type02"><li>인출시기 : 25세</li><li>인출횟수 : 1회</li></ul>'},
    {num:15, tit:"교육자금 인출 알림e서비스 란?", desc:'교육자금 인출 예정일 7일 전에 교육자금 인출 예정일, 교육자금 인출 예정금액, 납입보험료에 관한 사항, 계약자적립금에 관한 사항, 교육자금 인출에 관한사항 등을 계약자에게 서면, 전화 또는 이메일 등으로 안내하는 서비스 입니다.'},
    //어린이보장
    {num:16, tit:"합리적인 보험료로 30세 까지 보장", desc:"보험기간은 보장 받을 수 있는 기간을 말합니다.  보험료가 합리적인 어린이보험으로 30세 보장으로 길게 가입하여 성인 보험과 함께 보장 받을 수 있도록 하는 것을 추천합니다."},
    //정기보험
    {num:17, tit:"1억원으로 가입하기", desc:"보험금이 높으면, 그만큼 내야 하는 월 보험료도 많아지게 됩니다. 이럴 경우 보험료에 대한 부담으로 경제적 여건이 어려워질 때 해지를 고민하게 됩니다. 그래서, 처음에는 최소 보장금액 1억원 정도로 설계하여 보험료 부담을 낮추고 향후에 경제적 여건에 따라 추가로 가입하셔도 좋습니다."},
    {num:18, tit:"가장의 경제활동기 집중 보장하기", desc:"가장이 경제적으로 가족을 부양해야 하는 시점에 갑작스러운 가장의 부재를 대비해야 합니다. 가장의 부재 시에도 남은 가족들이 생계를 지켜나갈 수 있도록 경제활동기 집중 보장을 추천합니다."},
    {num:19, tit:"건강체 가입조건", desc:'<ul class="list-type02"><li>흡연 : 평생 비흡연 또는 청약일 기준 최근 1년간 금연</li><li>신체질량지수(BMI) kg/㎡ : 18.5 이상 ~ 26.5 미만</li><li>혈압(수축기/이완기) mmHg :  140 / 90 미만</li></ul>'},
    {num:20, tit:"수퍼건강체 가입조건", desc:'<ul class="list-type02"><li>흡연 : 평생 비흡연</li><li>신체질량지수(BMI) kg/㎡ : 20.0 이상 ~ 25.0 미만</li><li>혈압(수축기/이완기) mmHg :  120 / 80 미만</li><li>총콜레스테롤 ㎎/㎗ : 190 미만</li><li>HDL 콜레스테롤 ㎎/㎗ : 남자 50 이상 여자 60 이상</li><li>당뇨 및 혈당 ㎎/㎗ : 당뇨이력이 없으면서 식전혈당 110 미만</li></ul>'},
    //연금보험
    {num:22, tit:"상속연금형이란?", desc:"연금을 수령 받기 시작하면 적립금은 그대로 두고, 이자만 연금으로 받다가 사망하면 적립금을 유족에게 물려주는 지급형태입니다."},
    //종신보험
    {num:23, tit:"일반형과 체감형의 차이", desc:"일반형은 사망시점에 상관없이 일정한 사망보험금을 받는 형태로 전통적인 종신보험입니다. 체감형은 경제활동기에 사망보험금을 더 많이 받는 형태로 보험료가 일반형보다 저렴합니다."},
    // 미세먼지
    {num:24, tit:"미세먼지질병 진단보험금이란?", desc:"미세먼지 관련 질병(호흡기관암, 뇌출혈, 급성심근경색증, 만성폐쇄성폐질환)의 진단을 받은 경우, 최초 1회의 진단 확정에 한하여 보험금이 지급됩니다."},
    {num:25, tit:"###", desc:"###"},
    {num:26, tit:"###", desc:"###"},
    // {num:###, tit:"###", desc:"###"}
    // {num:###, tit:"###", desc:'<ul class="list-type02"><li>###</li><li>###</li><li>###</li></ul>'}
];

//json ajax - 설계옵션 선택 비율 211102 수정 
function manualPlan(){
    var xmlhttp = new XMLHttpRequest(),
    url = "/resources/data/insuPlan_selectRate.json"; //json 파일경로 (각 옵션별 선택 비율 by 디지털마케팅)
    
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
            optionRate = JSON.parse(this.responseText);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//mobiscroll layer 상단설명팝업
function layerTip(num){//pickerTips의 해당 num
    var markUp = '<div class="tip-type2 _layer js-layer-tip">';
    markUp +=    '<p><span class="tag-type yellow fill">TIP</span></p>';
    markUp +=    '<p class="tit">' + pickerTips.find(x => x.num === num).tit + '</p>';
    markUp +=    '<div class="desc">' + pickerTips.find(x => x.num === num).desc + '</div>';
    markUp +='</div>';
    $(".js-layer-tip").remove();
    $('div[role="dialog"]').before(markUp);
}

//mobiscroll layer 부가설명 팝업 - 동일연령대 각 설계항목별 선택비율 211102 수정 
function layerTip2(codeNum, age, sex, optionType){//상품코드, 연령대, 성별, 옵션타입(ableMount:가입금액 , period:납입기간, payType:납입형태, insuTerm:보험기간, refund:만기환급률, fee:보험료)
    var sex = "m" ? "남" : "여",
    prodNum = codeNum,//prod + 상품코드 2자리
    objArr,//상품코드 > 연령대로 추려질 임시 객체 배열
    objArr2,//코드 효율화를 위한 변수
    markUp = '<p class="txt-exclam _layer js-layer-tip"><span class="ico-bullet6"></span>';
    
    objArr = optionRate[prodNum].filter( function(item){ return item.ageGroup === age});
    objArrSex = objArr.find(x => x.sex === sex);

    //json parsing data 중 선택할 옵션
    if(optionType == "ableMount"){//보험가입금액 ableMount
        markUp +=  age + "대 "+ sex +"성 " + numWon(objArrSex.ableMount[1]) +'원 <em>'+ Math.floor(objArrSex.ableMount[2]) +'%</em> 선택</p>';
    }else if(optionType == "period"){//납입기간 period
        markUp += age + "대 "+ sex +"성 " + objArrSex.period[1] +' <em>'+  Math.floor(objArrSex.period[2]) +'%</em> 선택</p>';
    }else if(optionType == "payType"){//납입형태 payType
        markUp += age + "대 "+ sex +"성 " + objArrSex.payType[1] +' <em>'+  Math.floor(objArrSex.payType[2]) +'%</em> 선택</p>';
    }else if(optionType == "insuTerm"){//보험기간 insuTerm
        markUp += age + "대 "+ sex +"성 " + objArrSex.insuTerm[1] +' <em>'+  Math.floor(objArrSex.insuTerm[2]) +'%</em> 선택</p>';
    }else if(optionType == "refund"){//만기환급률 refund
        markUp += age + "대 "+ sex +"성 " + objArrSex.refund[1] +' <em>'+  Math.floor(objArrSex.refund[2]) +'%</em> 선택</p>';
    }else if(optionType == "fee"){//월기본보험료 fee
        markUp += age + "대 "+ sex +"성 " + numWon(objArrSex.fee[1]) +'원 <em>'+  Math.floor(objArrSex.fee[2]) +'%</em> 선택</p>';
    }
    $('div[role="dialog"]').prepend(markUp);
}

//mobiscroll layer 설명 팝업 닫기
function layerTipCls(){
    $(".js-layer-tip").remove();
}

//로딩 활성화(임시)
function loadingArea(){
	var loadingHtml = '<div id="loadingArea" class="loading-area"><div class="spinner-wrapper"><div class="spinner-wrap"><svg class="spinner-svg" viewBox="0 0 50 50"><circle class="path" fill="none" cx="25" cy="25" r="20"></circle></svg></div></div></div>';
    $("#loadingArea").remove();
    $("body").append(loadingHtml);
	$("#loadingArea").show();
}
//로딩 비활성화(임시)
function loadingCls(){
    $("#loadingArea").remove();
}

//토글기능
var toggleBtn = function(){
    var obj =  $(".btn-toggle, .btn-favor");
    obj.off().on("click", function(e){
        e.preventDefault();
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        }else{
            $(this).addClass("on");
        }	    
    })
}

//관심상품 애니메이션 
function bookmarkMotion(){
    var markup = '<p class="book-ani">';
    markup += '<svg width="20px" height="22px" viewBox="0 0 20 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
    markup +=     '<g stroke="none" stroke-width="1" fill-rule="evenodd">';
    markup +=         '<g transform="translate(-318.000000, -17.000000)">';
    markup +=             '<g id="header" stroke="#000" stroke-width="2">';
    markup +=                 '<g id="Fill-1" transform="translate(316.000000, 16.000000)">';
    markup +=                     '<path d="M20.7777778,2 L21,21.7959546 L13.2131312,18.2415675 C12.8447119,18.003695 12.4223707,17.8844779 12.0001528,17.8844779 C11.5775668,17.8844779 11.1554141,18.003881 10.7876138,18.2418052 L10.7876138,18.2418052 L3.39534064,21.924117 L3,2.20279113 L20.7777778,2 Z"></path>';
    markup +=                 '</g>';
    markup +=             '</g>';
    markup +=         '</g>';
    markup +=     '</g>';
    markup += '</svg>';
    markup += '</p>';

    $(markup).appendTo($("body")).stop(true).delay(200).queue(function(){
        $(".book-ani").addClass("on");
        $(this).dequeue();
    }).delay(700).queue(function(){
        $(".book-ani").remove();
        $(this).dequeue();
    });
}

var favorLen = 0;//관심 상품 총 갯수. 임의로 셋팅(개발처리 필요) //임시용
//favorLen = BMK.getBookMarkCnt();  //개발쪽 처리 구문
function bookCount(t){
    var obj = $(t);
    var touchX = event.clientX,
    touchY = event.clientY;
    cssValChange("bookX", touchX + "px");
    cssValChange("bookY", touchY + "px");

    if(!obj.hasClass("on")){
        bookmarkMotion();
        favorLen ++;
        momentMsg("관심상품에 저장됨");
        setTimeout(function(){favorCount(favorLen)}, 700);
    }else{
        favorLen --;
        favorCount(favorLen);
    }
    return favorLen;
}

//일시적 알림용 박스
function momentMsg(txt){
    var txt = "<p>"+txt+"</p>";

    $(".moment-box").html(txt).addClass("on").delay(1500).queue(function(){
        $(this).removeClass("on");
        $(this).dequeue();
    });
}

//상단 즐겨찾기 total count - 상품 즐겨찾기(".btn-favor") 클릭시 해당 함수 실행
function favorCount(n){
    var num = n; //현재 즐겨찾기 상품갯수
    if(num > 0){
        $("#btnBasket").addClass("on").find(".txt").text(num);
    }else{
        $("#btnBasket").removeClass("on").find(".txt").text(num);
    }
}

//온보딩 이미지
function imgOnboarding(num){//num 는 상품코드
    let pgCode = num ? num : "main",
    txtAlts = [
        {pg:"main", txt:"인생은 복잡하니까 보험은 쉽게 - 합리적인 보험상품을 제공하는 라이프플래닛입니다."}, //메인
        {pg:"01", txt:"사랑하는 가족을 위한 대비 고객님의 보험료가 궁금하다면?"}, //정기
        {pg:"02", txt:"사랑하는 가족을 위한 평생 약속 고객님의 보험료가 궁금하다면?"}, //종신
        {pg:"03", txt:"노후준비도 똑부러지게! 고객님의 예상 연금수령액이 궁금하다면?"}, //연금
        {pg:"04", txt:"노후준비와 세액공제를 동시에!? 고객님의 예상 연금수령액이 궁금하다면?"}, //연금저축
        {pg:"07", txt:"어린이에게 꼭 필요한 보장만! 우리 아이 보험료가 궁금하다면?"}, //어린이보장
        {pg:"08", txt:"금쪽같은 내 새끼 우리 아이 위한 교육자금 만기수령액이 궁금하다면?"}, //어린이저축
        {pg:"11", txt:"암보장, 100세까지 든든하게! 고객님의 보험료가 궁금하다면?"}, //암
        {pg:"17", txt:"일상생활 속 사고, 걱정되니까! 고객님의 보험료가 궁금하다면?"}, //상해
        {pg:"25", txt:"만기유지보너스에 비과세 혜택도! 고객님의 저축 만기수령액이 궁금하다면?"}, //저축
        {pg:"28", txt:"갑작스러운 입원비용, 걱정되니까! 고객님의 보험료가 궁금하다면?"}, //입원비
        {pg:"29", txt:"갑작스러운 수술비용, 걱정되니까! 고객님의 보험료가 궁금하다면?"}, //수술비
        {pg:"37", txt:"암보장, 100세까지 든든하게! 고객님의 보험료가 궁금하다면?"}, //비갱신암
        {pg:"41", txt:"미세먼지, 마스크를 써도 불안하니까 고객님의 보험료가 궁금하다면?"}, //미세먼지
        {pg:"43", txt:"치과보다 무서운 치과 진료비! 고객님의 보험료가 궁금하다면?"}, //치아
        {pg:"49", txt:"여성 주요 질환 집중 보장! 고객님의 보험료가 궁금하다면?"}, //여성건강
        {pg:"52", txt:"뇌·심장 보장, 100세까지 든든하게! 고객님의 보험료가 궁금하다면?"} //뇌심장
    ];
    imgMarkup = '<p><img src="/resources/images/renew/img_onboarding_pg'+ pgCode +'.png" alt="'+ txtAlts.find(x => x.pg === pgCode).txt +'"></p>';
    $("#imgOnboard").append(imgMarkup);
}

//ajax tooltip
var setTooltipButtons = function(){
	$("[data-tooltip-id]").off().on("click", function(e){ //180726 수정
		callTooltip($(this).data("tooltip-id"));
		if(!$(this).is("input")){
			e.preventDefault();
		};

	});
	$(".btn_tooltip_close, .js-tooltip-cls").off().on("click", function(e){
		e.preventDefault();
		removeTooltip();
	});
}

//고객설문
var csSurveyBtn = function(){
    const obj =  $(".btn-smile");
    obj.off().on("click", function(e){
        e.preventDefault();
        $(".btn-smile").removeClass("on");
        $(this).addClass("on");
        $(this).parents(".box-default").find(".text-area-wrap").slideDown(200);
    })
}

//공통 팝업호출 임시 스크립트
function tabCheck(num){
    setTimeout(function(){
        $("#tab"+num).trigger("click")
    }, 200);
}

//니즈환기 모션
var needsMotion = function(death){
    if($(".motion").length > 0){
        $(window).on("scroll", function(){
            if($(".motion").hasClass("done")) return false;
            if($(this).scrollTop() > $(".motion").position().top - 300){
                $(".motion").addClass("done");
                if(death){
                    $(".motion").find(".rate").css("width", death);
                }
            }
        });        
    }
}

//이미지 앙고라 효과
var catMotion = function(){
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 56 && $(this).scrollTop() < 170){
            // eslint-disable-next-line no-undef
            $(".img-cat").css("background-position-y", $(this).scrollTop() - 56);
        }else if($(this).scrollTop() < 56){
            $(".img-cat").css("background-position-y", 0);
        }        
    });
}

//보험료설계 그래프 그리기 211018 수정
function moveGraph(t){
    var $target = $("[data-graph-percent]"),
        $time = t ? t : 0;
        setTimeout(function(){
            $target.each(function(i) {
                var widthSize = $(this).attr("data-graph-percent");
                if (widthSize > 99) {
                    widthSize = 100;
                }
                $(this).css({
                    "width": widthSize + "%",
                    "opacity": 1
                });
            });
        }, $time);
}
//보험료설계 그래프 지우기
function removeGraph(){
    var $target = $("[data-graph-percent]");

    $target.css("width",0);
}

//상담팝업
var counselPop = {
    open:function(){
        event.preventDefault();
        $("#popCounsel, .page_dim").addClass("on");
        fixedBody("Y");
    },
    close:function(){
        event.preventDefault();
        $("#popCounsel, .page_dim").removeClass("on");
        fixedBody("N");
    }
}

//dim close 
var dimCls = function(){
    $(".page_dim").on("click", function(){
        if($(".pop-counsel").hasClass("on")){//상담팝업
            counselPop.close();
        }else if($(".popup_area > .pop_section_dx").length > 0){//ajax 팝업
            var obj = $(".popup_area > .pop_section_dx").attr("data-popup-id");
            removePopup(obj);
        }else if($(".js-discount").hasClass("on")){//할인 팝업
            $(".js-discount").find(".cls").trigger("click");
        }
    });
}

//롤링넘버
var rollingNum = function(target, num, minor, noComma){//대상, 숫자, 소수인 경우 자리수, comma처리 불필요시
    // console.log(minor, num);
    var n = !minor ? Math.floor(num) : Number(num).toFixed(minor);
    $(target).text(n).each(function () {
        $(this).prop('Counter',0).stop().animate({
            Counter: $(this).text()
        }, {
            duration: 600,
            easing: 'swing',
            step: function (now) {
                if(minor < 1 && noComma != "Y"){
                    $(this).text(numComma(Math.floor(now)));
                }else if(noComma == "Y"){
                    $(this).text(Math.floor(now));
                }else{
                    $(this).text(numComma(now.toFixed(minor)));
                }
            }
        });
    });
}

var numComma = function(num){
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var delComma = function(num){
	return Number(num.replace(/,/g,""));
}

// 금액 단위환산
var numWon = function(num){
	var won = (num+"").replace(/,/g,"");
	var arrWon = ["원","만","억","조"];
	var changeWon = "";
	var pattern = /(-?[0-9]+)([0-9]{4})/;
	while(pattern.test(won)){
		won = won.replace(pattern,"$1,$2");
	}
	var arrCnt = won.split(",").length-1;
	for(var k=0; k<won.split(",").length; k++){
		if(arrWon[arrCnt] == undefined){
			return num;
			break;
		}
		var tmpwon = 0;
		for(i=0; i<won.split(",")[k].length;i++){
			var num1 = won.split(",")[k].substring(i,i+1);
			tmpwon = tmpwon+Number(num1);
		}
		if(tmpwon > 0){
			changeWon += won.split(",")[k]+arrWon[arrCnt];
		}
		arrCnt--;
	}
	if(changeWon =="")changeWon="0";
	changeWon = changeWon.replace("000","천");
	return changeWon;
}
//고객설문
var txtLenCheck = function(){
    $(".text-area").off().on("keyup", function(){
        $(this).parent().find(".byte > em").text($(this).val().length);
    });
}

//화면예시를 위한 임시 스크립트
class myInfo {
    constructor(birth, sex, prodCategory) {//생일, 성별, 상품카테고리
      const d = new Date(),
          year = d.getFullYear();
      this.birth = birth;
      this.sex = sex;
      this.prodCategory = prodCategory;
      this.age = Number(year - birth.slice(0, 4));
    }
}

//init
function uiInit(){
    toolFunction();
    txtLenCheck();
    inputFocus();
    // btnAction(); //211018_2 수정
    toggleList();
    toggleBtn();
    tabButton();
    tipOpen2();//할인 tip
    dimCls();
    tabList();//tab
    setTooltipButtons();//ajax tooltip
}

jQuery(document).ready(function(){
    //PAGE ON READY 개발관련 스크립트 생성
    if (typeof Main != 'undefined') {
        // 초기화 이벤트 호출
        Main.readyEvent();
        
        //MXP deviceready 이벤트 호출 
        MXP_PLUGIN.fireMXPNativeReadyEvent();
    }
    
    
    
    var bannSwiper = new Swiper(".swiper-container", {
        // on:{
        //     init:function(){
        //         console.log('bannSwiper');
        //     }
        // },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },        
        speed : 600,
        spaceBetween: 100,
        autoplay : 3000
    });
    

    //init
    uiInit();
    btnAction(); //211018_2 수정
});  




// mw.dx. js 이관함
//
// GNB
//
// plugin : idangerous.swiper
$(document).ready(function() {

	if(location.pathname.indexOf("/mypage/") > -1){
		var $banner = $("#event_banner_box").find("img[alt='보험계약대출']");
		var banner_chk = $banner.length;
		if(banner_chk > 0){
			var event_banner_box_li =$banner.closest("li").detach();
			$("#event_banner_box li:eq(0)").before(event_banner_box_li);
		}

// 개발 리소스
// 		setTimeout(function(){
// 			var findYN ="N";
// 			var url =location.pathname.replace(".dev","");
// 			var $urlFind =$("div.menu_contract").find("a[href*='"+url+"']");

// 			if(util.nvl($urlFind,"") != "" && $urlFind.length > 0){
// 			   sessionStorage.setItem('curActiveID', url);
// 			   findYN="Y";
// 			}else if (!util.isNull(sessionStorage.getItem('curActiveID'))) {
// 			   var url = sessionStorage.getItem('curActiveID');

// 			   if(url =="MWMM110S1" || url =="MWMM120S1" || url =="MWMM130S1"){//이름변경 예외처리
// 				   url = "MWMA000S1";
// 			   }

// 			   $urlFind =$("div.menu_contract").find("a[href*='"+url+"']");
// 			   findYN="Y";
// 			}

// 			if(findYN == "Y" ){
// 				try{
// 					var depthChk = $urlFind.parents("li");
// 					var depthChkLen = depthChk.length-1;
// 					var Find2depth = depthChk[depthChkLen];
// 					var depth2 =0;
// 					var depth3 =0;
// //					console.log("2 == "+$("div.menu_contract ul.depth2_el_list > li").index(Find2depth));
// 					depth2 = $("div.menu_contract ul.depth2_el_list > li").index(Find2depth);
// 					if(depthChkLen > 0){
// 						var Find3depth =  $urlFind.closest("li");

// //						console.log("3 == "+ $(Find2depth).find("ul > li").index(Find3depth));
// 						depth3 = $(Find2depth).find("ul > li").index(Find3depth);
// 					}


// 					mypgeDepths(depth2,depth3);
// 				}catch(e){

// 				}

// 			}


// 		},500);
	}
    

	/* setGnbTabRenew
	GNB 리뉴얼 버전
	*/
	var setGnbTabRenew = function(){
		var gnb = $("#gnb");
		var gnbTab = $("#gnbTab");
		var category = gnb.find(".gnb_state");
		$(".gnb_body").css("min-height", $(window).height() - $(".gnb_header").height() + 153);
		//1depth click
		gnbTab.find("li > a").on("click",function(e){
            var obj = $(this).attr("href");
            var idx = $(this).parent().index();
			var touchX, touchY;
			var scaleSize = ($(this).innerWidth()/$(this).innerHeight()) + 1;
			touchX = e.offsetX;
			touchY = e.offsetY;

			if($(this).hasClass("on")) return false;//중복 트리거 방지
			gnbTab.find("li > a").removeClass("on");
			$("#gnb .r_nav > .dep2").hide();
			cssValChange("ckx", touchX + "px");
			cssValChange("cky", touchY + "px");
			cssValChange("size", scaleSize);

			$(this).addClass("on");
			gnb.find(".r_nav").scrollTop(0);
			$(obj).fadeIn();
            if(obj == "#menu03"){//이벤트 메뉴 내 스와이프 배너
                event_banner.update();
            }

            if(idx == 0){//상품
				category.removeClass("contract").addClass("products");
			}else if(idx == 1){//계약관리
				category.removeClass("products").addClass("contract");
			}else{
                category.removeClass("contract").removeClass("products");
            }
            e.preventDefault();		
		});
	}

  	//private function 200601 수정
	var setGnbButtons = function(){
        $("#btnGnb").off().on("click",function(e){
            $("#gnb").addClass("open");
			fixedBody("Y");
			$("#gnb .swiper_carousel").each(function(){
				if($(this).data("plugin_SwiperCarousel")){
					$(this).data("plugin_SwiperCarousel").object.update();
				}
            });
			e.preventDefault();			
        });
		//닫기
		$(".btn_gnb_close, .gnb_dim").click(function(e){
			$("#gnb").removeClass("open");
			fixedBody("N");
			e.preventDefault();
		});
		//2뎁스 
		$("#gnb .gnb_body > .r_nav > div > ul > li a").click(function(e){
            var touchX, touchY;
			var scaleSize = ($(this).innerWidth()/$(this).innerHeight()) + 2;
			touchX = e.offsetX;
			touchY = e.offsetY;	
			cssValChange("ckx", touchX + "px");
			cssValChange("cky", touchY + "px");
            cssValChange("size", scaleSize);
        
			$(this).addClass("active").delay(300).queue(function(){
				$(this).removeClass("active")
				$(this).dequeue();
			});
		});		
        //3뎁스
		$("#gnb .dep3 > a").click(function(e){
			if($(this).hasClass("on")){
				$(this).removeClass("on").next().stop(true, true).slideUp(300);
			}else{
				$(this).addClass("on").next().stop(true, true).slideDown(300);
			}			
			e.preventDefault();
        });
        
		$(".btn_gnb_home").click(function(e){
    		PageUtil.movePage('/common/cm/CM01000S');
    		e.preventDefault();
    	});
    	$(".btn_gnb_login").click(function(e){
    		loginNew();
    		e.preventDefault();
    	});
    	$(".btn_gnb_certi").click(function(e){
    		PageUtil.movePage('/common/ca/CA06000S');
    		e.preventDefault();
    	});
    	$(".btn_gnb_alarm").click(function(e){
    		moveToMWMC200S1();
    		e.preventDefault();
    	});
    	$(".btn_gnb_logout").click(function(e){
    		Main.logoutNew();
    		e.preventDefault();
    	});
	}

	var mypgeDepths = function(depth2,depth3){
		var gnb = $("#gnb_wrap");
		var category = gnb.find(".gnb_state");

        if(!category.hasClass("contract")){
            $("#gnbTab").find("li").eq(1).find("a").triggerHandler("click");
        }
    } 

	/* 20170510 GNB 로그인 연장 ... 적용 가로크기 */
	var $depth0_txt1 = $('.depth0_txt1 > p > span').width();
	if($depth0_txt1 > 160){
		$('.depth0_txt1 > p > span').css({'width':'160px'});
	}
	    
    /*
     * 170512 mobile 가로모드 미지원 출력
     */
    //170623 수정
	var orient01="";
	orient01 += '<div id="screen_off" class="dimbg">';
	orient01 += '   <div class="mode_box"><span class="icon100 icon_warning"></span>모바일은 세로모드에 최적화되어 있습니다.</div>';
	orient01 += '</div>';


	var isMobile = /Android|webOS|iPhone|iPad|iPod|Linux|BlackBerry/i.test(navigator.userAgent) ? true : false;

	// 모바일이 아닐때만 작동
	if(!isMobile){
		$('#screen_off').css({display:'none'});
		$('body').css({overflowY:'scroll', overflowX:'hidden'});
	}

	if(/iPhone|iPad/i.test(navigator.userAgent)){
		$(window).on('orientationchange load', function () {
		    if(window.matchMedia("(orientation: landscape)").matches){
		    	$('body').on('touchmove', function(e){
		    		e.preventDefault();
		    	});
		    }else{
		    	$('body').off('touchmove');
		    }
	    });
	}


    /**
     * 모바일 뒤로가기 버튼 관련 수정사항 S
     * sj.jun 2016.03.09
     * */
    (function ($, global) {

    	$.fn.mobileBack = function () {
    		// 엘리먼트 생성
    		var $this = $(this)
    		, _option = {
    			'elemHTML' : '<a href="javascript:;" class="btn_page_prev"><span class="blind">이전 페이지로 가기</span></a>',
    			'targetClass' : '.btn_page_prev',
    			'arrExistsUri' : ['/mypage/', '/products/pa/', '/products/pm/','/common/cc/MWCC015S1','/common/cc/MWCC020S1',
    							 '/common/cc/MWCC025S1','/common/cc/MWCC030S1','/common/cc/MWCC035S1','/common/cc/MWCC040S1']
    		}
    		, _fnMakeElement = function () {

    			var _$target = $this.find (_option.targetClass);

    			if (_$target.length) {

    				_$target.remove ();
    			}

    			$this.append (_option.elemHTML);

    			_$target = $this.find (_option.targetClass);
    			_$target.fadeIn (400);
    		}
    		// 이벤트 바인딩
    		, _fnBindEvent = function () {

    			// 뒤로가기 버튼
    			$this.find ('a' + _option.targetClass).unbind ('click').bind ('click', function () {

    				history.back ();
    				return false;
    			});

    		    $(window).on("scrollstart", function() {

    		    	_objOpenMethod.hide ();

    		    }).on("scrollstop", function() {

    		    	_objOpenMethod.show ();
    		    });
    		}
    		// 버튼 생성여부 판단
    		, _fnIsMakeElements = function () {

    			return _fnIsPureBroswer () && _isValidPageUri ();
    		}
    		// 순수 브라우저 (크롬, 사파리) 여부 판단
    		, _fnIsPureBroswer = function () {

    			var _userInfo = navigator.userAgent.toUpperCase ();
    			return !(_userInfo.match(/NAVER/) || _userInfo.match(/DAUMAPPS/) || _userInfo.match(/NATE_APP/));
    		}
    		// 유효한 URI인지 판단 (청약, 마이페이지에서는 생성하지 않음)
    		, _isValidPageUri = function () {

    			var _pathName = location.pathname
    			, _arrNotExistsPageUri = _option.arrExistsUri
    			, _notExistsPageUri = ''
    			, i, length
    			, isValid = true;


    			for (i = 0, length = _arrNotExistsPageUri.length; i < length; i += 1) {

    				_notExistsPageUri = _arrNotExistsPageUri[ i ];

    				if (_pathName.indexOf (_notExistsPageUri) > -1) {

    					isValid = false;
    					break;
    				}
    			}
    			return isValid;
    		}
    		, _objOpenMethod = {
    			'show' : function (callback) {
    				var $target = $this.find (_option.targetClass);

    				if ($target.length) {

    					$this.find (_option.targetClass).fadeIn (400);
    				}
    			},
    			'hide' : function (callback) {
    				var $target = $this.find (_option.targetClass);

    				if ($target.length) {

    					$this.find (_option.targetClass).hide ();
    				}
    			}
    		};
    		if (_fnIsMakeElements ()) {

     			_fnMakeElement ();
     			_fnBindEvent ();
     		}

    		return $this;
    	};
    }(jQuery, window));

    // 모바일 뒤로가기 버튼 생성
	$('.content').mobileBack ();
    /**
     * 모바일 뒤로가기 버튼 관련 수정사항 E
     * */

	/* 170209 상담톡 버튼 추가 */
    var btnTalkRight = ""; //상담톡 버튼 추가 append
    btnTalkRight += '<a href="javascript:;" data-dupid="kabotOn" class="btn_talk"><span class="blind">챗봇</span></a>';
    $('.content').append(btnTalkRight);
    $('[data-dupid=kabotOn]').off('click').on('click', function () {
		var option = {
    			location : 'browserPopUp',
    			url : 'http://pf.kakao.com/_zxjPxexh/chat'
    		};
		PageUtil.openPopup(option);
	});
	function talkBtn(){ //화면 버튼 제어
	    var userInfo2 = navigator.userAgent.toUpperCase();

	    $('.btn_talk').fadeIn(400);
	    if(userInfo2.match(/NAVER/)){
	    	$('body').addClass('naverApp');
 		}else if(userInfo2.match(/DAUMAPPS/)){
 			$('body').addClass('daumApp');
 		}else if(userInfo2.match(/NATE_APP/)){
 			$('body').addClass('nateApp');
 		}
	    else{

 		}
	}
    talkBtn();
    setGnbButtons();
    setGnbTabRenew();//200601 수정
    mypgeDepths(); //임시 스크립트 200601 수정
});


/* ajax 팝업 생성
	ajax를 통해 팝업 마크업을 화면에 그림
	id: ajax 연결 ID(현재는 URL로 쓰임)
	callBackFn: 팝업 이후 실행 함수
	paramObj: 개발파트 사용 파라메터
	loadingKey: 팝업 로딩중 보여줄 로딩종류Key
*/
// function callPopup(id, callBackFn, paramObj, loadingKey){
// 	paramObj === undefined ? paramObj = {} : paramObj;
// 	$.ajax({
// 		url:id,
// 		method: 'POST',
// 		dataType: "text",
// 		context: document.body,
// 		data : { JSON_DATA : JSON.stringify(paramObj, null ,2) },
// 		beforeSend: function(){
// 			fnLoading_Show(loadingKey);
// 		}
// 	}).done(function(data){
// 		fnLoading_Hide();
// 		$(".dim_kp").fadeIn(400);
// 		var popupWrap = $("<section />", {
// 			"class": "pop_section_dx",
// 			"style": "min-height:"+ CheckHeight() +"px;",
// 			"data-popup-id": id,
// 			html: data
// 		});
// 		$(".popup_area").append(popupWrap).delay(100).queue(function(){
// 			$(this).find("> .pop_section_dx").addClass("on");
// 			$(this).dequeue();
// 		});
// 		btnPopCls();
// 		fixedBody("Y");
// 		callBackFn !== undefined ? callBackFn(id) : null;
// 	}).fail(function() {
// 		console.log( "ajax Popup load Error" );
// 	});
// }
//id, callBackFn, type, paramObj, loadingKey, layerType
function callPopup(id, callBackFn, ty){
    event.preventDefault();
	$.ajax({
		url:id,
		method: 'POST',
		dataType: "text",
		context: document.body,
		// data : {},
		beforeSend: function(){
			//console.log("ajax load");
			// fnLoading_Show(loadingKey);
			loadingArea();
		}
	}).done(function(data) {
		var divTipe = ty == "Y" ? "pop_section_dx layer" : "pop_section_dx", //full과 layer popup 형태 구분을 위한 변수
		divHeight = ty == "Y" ? "auto" : CheckHeight() + "px;", //full과 layer 형태의 height 구분을 위한 변수
		popupWrap = $("<section />", {
			"class": divTipe,
			"style": "min-height:"+ divHeight,
			"data-popup-id": id,
			html: data
		});
		fnLoading_Hide();
		counselPop.close();

		$(".page_dim").addClass("on");
		$(".popup_area").append(popupWrap).delay(100).queue(function(){
			$(this).find("> .pop_section_dx").addClass("on");
			$(this).dequeue();
		});
		uiInit();
		btnPopCls();
		loadingCls();
		fixedBody("Y");
		// eslint-disable-next-line no-unused-expressions
		callBackFn !== undefined ? callBackFn(id) : null;
	}).fail(function() {
		console.log( "ajax Popup load Error" );
	});
}

//ajax 팝업 제거
function removePopup(id, mul){//mul: 팝업위의 팝업시
	var popupArea = $(".popup_area").find('> .pop_section_dx[data-popup-id="'+id+'"]');	
	popupArea.addClass("closing").delay(250).queue(function(){
		$(this).removeClass("on closing").remove();
		if(!mul){
			fixedBody("N");
			$(".page_dim").removeClass("on");//바른보장의 dip_kp 클래스 수정필요.
		}else{
			$(".pop_section_dx .page_dim").removeClass("on");//바른보장의 dip_kp 클래스 수정필요.
		}
		$(this).dequeue();
	});
}


function callTooltip(id){
	if(!$('.tip_content[data-tooltip-id="'+id+'"]').length){
		$.ajax({
			url:id,
			dataType:"html"
		}).done(function(data){
            var tooltipContent = $(data).attr("data-tooltip-id", id);
            console.log(data);
			$(".tooltip .tip_content_wrap > .tip_content").remove();
			$(".tooltip .tip_content_wrap ").prepend(tooltipContent);
			setTimeout(function(){
				$(".tooltip").addClass("_active").find(".tip_content").focus();
			}, 100);
			uiInit();
			fixedBody("Y");
		});
	}else{
		$(".tooltip").addClass("_active").find(".tip_content").focus();
	}
}
function removeTooltip(){
	$(".tooltip").removeClass("_active");
	fixedBody("N");
	if($(".tip_content.double").index() != -1){
		//
	}
}

//ajax 팝업 제거 - 기본버튼 지정
function btnPopCls(){
	$(".js-pop-close").on("click", function(e){
		e.preventDefault();
		var id = $(this).parents(".pop_section_dx").attr("data-popup-id");
		removePopup(id);
	});
}

function CheckHeight(){
	var height = $(window).height();
	return height;
}


function fixedBody(yn){
	if(yn == "Y"){
		$("body").addClass("fix_scroll");
	}else{
		$("body").removeClass("fix_scroll");
	}	
}



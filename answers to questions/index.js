javascript:
(function(ns, fetch){
    if(typeof fetch !== 'function') return;

    console.log("🌱%c Khan Academy%c Hack is%c ON %c \nBy: https://github.com/nomomon", "text-shadow: 0.5px 0.5px 0 black, -0.5px -0.5px 0 black; color: white;", "color:black;", "color:green;", "color:black;");
    ns.fetch = function(){
        var out = fetch.apply(this, arguments);
        out.then(res =>{
            if(res.url.indexOf("getAssessmentItem")+1){
                res.clone().json().then(data => {
                    console.log(JSON.parse(data.data.assessmentItem.item.itemData).question)
                })
            }
        });
        
        return out;
    }
}(window, window.fetch))
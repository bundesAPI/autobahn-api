/*
 * language_data.js
 * ~~~~~~~~~~~~~~~~
 *
 * This script contains the language-specific data used by searchtools.js,
 * namely the list of stopwords, stemmer, scorer and splitter.
 *
 * :copyright: Copyright 2007-2021 by the Sphinx team, see AUTHORS.
 * :license: BSD, see LICENSE for details.
 *
 */

var stopwords = ["aber","alle","allem","allen","aller","alles","als","also","am","an","ander","andere","anderem","anderen","anderer","anderes","anderm","andern","anderr","anders","auch","auf","aus","bei","bin","bis","bist","da","damit","dann","das","dasselbe","dazu","da\u00df","dein","deine","deinem","deinen","deiner","deines","dem","demselben","den","denn","denselben","der","derer","derselbe","derselben","des","desselben","dessen","dich","die","dies","diese","dieselbe","dieselben","diesem","diesen","dieser","dieses","dir","doch","dort","du","durch","ein","eine","einem","einen","einer","eines","einig","einige","einigem","einigen","einiger","einiges","einmal","er","es","etwas","euch","euer","eure","eurem","euren","eurer","eures","f\u00fcr","gegen","gewesen","hab","habe","haben","hat","hatte","hatten","hier","hin","hinter","ich","ihm","ihn","ihnen","ihr","ihre","ihrem","ihren","ihrer","ihres","im","in","indem","ins","ist","jede","jedem","jeden","jeder","jedes","jene","jenem","jenen","jener","jenes","jetzt","kann","kein","keine","keinem","keinen","keiner","keines","k\u00f6nnen","k\u00f6nnte","machen","man","manche","manchem","manchen","mancher","manches","mein","meine","meinem","meinen","meiner","meines","mich","mir","mit","muss","musste","nach","nicht","nichts","noch","nun","nur","ob","oder","ohne","sehr","sein","seine","seinem","seinen","seiner","seines","selbst","sich","sie","sind","so","solche","solchem","solchen","solcher","solches","soll","sollte","sondern","sonst","um","und","uns","unse","unsem","unsen","unser","unses","unter","viel","vom","von","vor","war","waren","warst","was","weg","weil","weiter","welche","welchem","welchen","welcher","welches","wenn","werde","werden","wie","wieder","will","wir","wird","wirst","wo","wollen","wollte","w\u00e4hrend","w\u00fcrde","w\u00fcrden","zu","zum","zur","zwar","zwischen","\u00fcber"];


/* Non-minified version is copied as a separate JS file, is available */
BaseStemmer=function(){this.setCurrent=function(r){this.current=r;this.cursor=0;this.limit=this.current.length;this.limit_backward=0;this.bra=this.cursor;this.ket=this.limit};this.getCurrent=function(){return this.current};this.copy_from=function(r){this.current=r.current;this.cursor=r.cursor;this.limit=r.limit;this.limit_backward=r.limit_backward;this.bra=r.bra;this.ket=r.ket};this.in_grouping=function(r,t,i){if(this.cursor>=this.limit)return false;var s=this.current.charCodeAt(this.cursor);if(s>i||s<t)return false;s-=t;if((r[s>>>3]&1<<(s&7))==0)return false;this.cursor++;return true};this.in_grouping_b=function(r,t,i){if(this.cursor<=this.limit_backward)return false;var s=this.current.charCodeAt(this.cursor-1);if(s>i||s<t)return false;s-=t;if((r[s>>>3]&1<<(s&7))==0)return false;this.cursor--;return true};this.out_grouping=function(r,t,i){if(this.cursor>=this.limit)return false;var s=this.current.charCodeAt(this.cursor);if(s>i||s<t){this.cursor++;return true}s-=t;if((r[s>>>3]&1<<(s&7))==0){this.cursor++;return true}return false};this.out_grouping_b=function(r,t,i){if(this.cursor<=this.limit_backward)return false;var s=this.current.charCodeAt(this.cursor-1);if(s>i||s<t){this.cursor--;return true}s-=t;if((r[s>>>3]&1<<(s&7))==0){this.cursor--;return true}return false};this.eq_s=function(r){if(this.limit-this.cursor<r.length)return false;if(this.current.slice(this.cursor,this.cursor+r.length)!=r){return false}this.cursor+=r.length;return true};this.eq_s_b=function(r){if(this.cursor-this.limit_backward<r.length)return false;if(this.current.slice(this.cursor-r.length,this.cursor)!=r){return false}this.cursor-=r.length;return true};this.find_among=function(r){var t=0;var i=r.length;var s=this.cursor;var e=this.limit;var h=0;var u=0;var n=false;while(true){var c=t+(i-t>>>1);var a=0;var f=h<u?h:u;var l=r[c];var o;for(o=f;o<l[0].length;o++){if(s+f==e){a=-1;break}a=this.current.charCodeAt(s+f)-l[0].charCodeAt(o);if(a!=0)break;f++}if(a<0){i=c;u=f}else{t=c;h=f}if(i-t<=1){if(t>0)break;if(i==t)break;if(n)break;n=true}}do{var l=r[t];if(h>=l[0].length){this.cursor=s+l[0].length;if(l.length<4)return l[2];var v=l[3](this);this.cursor=s+l[0].length;if(v)return l[2]}t=l[1]}while(t>=0);return 0};this.find_among_b=function(r){var t=0;var i=r.length;var s=this.cursor;var e=this.limit_backward;var h=0;var u=0;var n=false;while(true){var c=t+(i-t>>1);var a=0;var f=h<u?h:u;var l=r[c];var o;for(o=l[0].length-1-f;o>=0;o--){if(s-f==e){a=-1;break}a=this.current.charCodeAt(s-1-f)-l[0].charCodeAt(o);if(a!=0)break;f++}if(a<0){i=c;u=f}else{t=c;h=f}if(i-t<=1){if(t>0)break;if(i==t)break;if(n)break;n=true}}do{var l=r[t];if(h>=l[0].length){this.cursor=s-l[0].length;if(l.length<4)return l[2];var v=l[3](this);this.cursor=s-l[0].length;if(v)return l[2]}t=l[1]}while(t>=0);return 0};this.replace_s=function(r,t,i){var s=i.length-(t-r);this.current=this.current.slice(0,r)+i+this.current.slice(t);this.limit+=s;if(this.cursor>=t)this.cursor+=s;else if(this.cursor>r)this.cursor=r;return s};this.slice_check=function(){if(this.bra<0||this.bra>this.ket||this.ket>this.limit||this.limit>this.current.length){return false}return true};this.slice_from=function(r){var t=false;if(this.slice_check()){this.replace_s(this.bra,this.ket,r);t=true}return t};this.slice_del=function(){return this.slice_from("")};this.insert=function(r,t,i){var s=this.replace_s(r,t,i);if(r<=this.bra)this.bra+=s;if(r<=this.ket)this.ket+=s};this.slice_to=function(){var r="";if(this.slice_check()){r=this.current.slice(this.bra,this.ket)}return r};this.assign_to=function(){return this.current.slice(0,this.limit)}};
GermanStemmer=function(){var r=new BaseStemmer;var e=[["",-1,5],["U",0,2],["Y",0,1],["ä",0,3],["ö",0,4],["ü",0,2]];var i=[["e",-1,2],["em",-1,1],["en",-1,2],["ern",-1,1],["er",-1,1],["s",-1,3],["es",5,2]];var s=[["en",-1,1],["er",-1,1],["st",-1,2],["est",2,1]];var u=[["ig",-1,1],["lich",-1,1]];var a=[["end",-1,1],["ig",-1,2],["ung",-1,1],["lich",-1,3],["isch",-1,2],["ik",-1,2],["heit",-1,3],["keit",-1,4]];var c=[17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,8,0,32,8];var t=[117,30,5];var o=[117,30,4];var f=0;var l=0;var n=0;function b(){var e=r.cursor;while(true){var i=r.cursor;r:{e:{var s=r.cursor;i:{r.bra=r.cursor;if(!r.eq_s("ß")){break i}r.ket=r.cursor;if(!r.slice_from("ss")){return false}break e}r.cursor=s;if(r.cursor>=r.limit){break r}r.cursor++}continue}r.cursor=i;break}r.cursor=e;while(true){var u=r.cursor;r:{e:while(true){var a=r.cursor;i:{if(!r.in_grouping(c,97,252)){break i}r.bra=r.cursor;s:{var t=r.cursor;u:{if(!r.eq_s("u")){break u}r.ket=r.cursor;if(!r.in_grouping(c,97,252)){break u}if(!r.slice_from("U")){return false}break s}r.cursor=t;if(!r.eq_s("y")){break i}r.ket=r.cursor;if(!r.in_grouping(c,97,252)){break i}if(!r.slice_from("Y")){return false}}r.cursor=a;break e}r.cursor=a;if(r.cursor>=r.limit){break r}r.cursor++}continue}r.cursor=u;break}return true}function k(){n=r.limit;l=r.limit;var e=r.cursor;{var i=r.cursor+3;if(i>r.limit){return false}r.cursor=i}f=r.cursor;r.cursor=e;r:while(true){e:{if(!r.in_grouping(c,97,252)){break e}break r}if(r.cursor>=r.limit){return false}r.cursor++}r:while(true){e:{if(!r.out_grouping(c,97,252)){break e}break r}if(r.cursor>=r.limit){return false}r.cursor++}n=r.cursor;r:{if(!(n<f)){break r}n=f}r:while(true){e:{if(!r.in_grouping(c,97,252)){break e}break r}if(r.cursor>=r.limit){return false}r.cursor++}r:while(true){e:{if(!r.out_grouping(c,97,252)){break e}break r}if(r.cursor>=r.limit){return false}r.cursor++}l=r.cursor;return true}function m(){var i;while(true){var s=r.cursor;r:{r.bra=r.cursor;i=r.find_among(e);if(i==0){break r}r.ket=r.cursor;switch(i){case 1:if(!r.slice_from("y")){return false}break;case 2:if(!r.slice_from("u")){return false}break;case 3:if(!r.slice_from("a")){return false}break;case 4:if(!r.slice_from("o")){return false}break;case 5:if(r.cursor>=r.limit){break r}r.cursor++;break}continue}r.cursor=s;break}return true}function _(){if(!(n<=r.cursor)){return false}return true}function v(){if(!(l<=r.cursor)){return false}return true}function g(){var e;var c=r.limit-r.cursor;r:{r.ket=r.cursor;e=r.find_among_b(i);if(e==0){break r}r.bra=r.cursor;if(!_()){break r}switch(e){case 1:if(!r.slice_del()){return false}break;case 2:if(!r.slice_del()){return false}var f=r.limit-r.cursor;e:{r.ket=r.cursor;if(!r.eq_s_b("s")){r.cursor=r.limit-f;break e}r.bra=r.cursor;if(!r.eq_s_b("nis")){r.cursor=r.limit-f;break e}if(!r.slice_del()){return false}}break;case 3:if(!r.in_grouping_b(t,98,116)){break r}if(!r.slice_del()){return false}break}}r.cursor=r.limit-c;var l=r.limit-r.cursor;r:{r.ket=r.cursor;e=r.find_among_b(s);if(e==0){break r}r.bra=r.cursor;if(!_()){break r}switch(e){case 1:if(!r.slice_del()){return false}break;case 2:if(!r.in_grouping_b(o,98,116)){break r}{var n=r.cursor-3;if(n<r.limit_backward){break r}r.cursor=n}if(!r.slice_del()){return false}break}}r.cursor=r.limit-l;var b=r.limit-r.cursor;r:{r.ket=r.cursor;e=r.find_among_b(a);if(e==0){break r}r.bra=r.cursor;if(!v()){break r}switch(e){case 1:if(!r.slice_del()){return false}var k=r.limit-r.cursor;e:{r.ket=r.cursor;if(!r.eq_s_b("ig")){r.cursor=r.limit-k;break e}r.bra=r.cursor;{var m=r.limit-r.cursor;i:{if(!r.eq_s_b("e")){break i}r.cursor=r.limit-k;break e}r.cursor=r.limit-m}if(!v()){r.cursor=r.limit-k;break e}if(!r.slice_del()){return false}}break;case 2:{var g=r.limit-r.cursor;e:{if(!r.eq_s_b("e")){break e}break r}r.cursor=r.limit-g}if(!r.slice_del()){return false}break;case 3:if(!r.slice_del()){return false}var d=r.limit-r.cursor;e:{r.ket=r.cursor;i:{var h=r.limit-r.cursor;s:{if(!r.eq_s_b("er")){break s}break i}r.cursor=r.limit-h;if(!r.eq_s_b("en")){r.cursor=r.limit-d;break e}}r.bra=r.cursor;if(!_()){r.cursor=r.limit-d;break e}if(!r.slice_del()){return false}}break;case 4:if(!r.slice_del()){return false}var w=r.limit-r.cursor;e:{r.ket=r.cursor;if(r.find_among_b(u)==0){r.cursor=r.limit-w;break e}r.bra=r.cursor;if(!v()){r.cursor=r.limit-w;break e}if(!r.slice_del()){return false}}break}}r.cursor=r.limit-b;return true}this.stem=function(){var e=r.cursor;b();r.cursor=e;var i=r.cursor;k();r.cursor=i;r.limit_backward=r.cursor;r.cursor=r.limit;g();r.cursor=r.limit_backward;var s=r.cursor;m();r.cursor=s;return true};this["stemWord"]=function(e){r.setCurrent(e);this.stem();return r.getCurrent()}};
Stemmer = GermanStemmer;



var splitChars = (function() {
    var result = {};
    var singles = [96, 180, 187, 191, 215, 247, 749, 885, 903, 907, 909, 930, 1014, 1648,
         1748, 1809, 2416, 2473, 2481, 2526, 2601, 2609, 2612, 2615, 2653, 2702,
         2706, 2729, 2737, 2740, 2857, 2865, 2868, 2910, 2928, 2948, 2961, 2971,
         2973, 3085, 3089, 3113, 3124, 3213, 3217, 3241, 3252, 3295, 3341, 3345,
         3369, 3506, 3516, 3633, 3715, 3721, 3736, 3744, 3748, 3750, 3756, 3761,
         3781, 3912, 4239, 4347, 4681, 4695, 4697, 4745, 4785, 4799, 4801, 4823,
         4881, 5760, 5901, 5997, 6313, 7405, 8024, 8026, 8028, 8030, 8117, 8125,
         8133, 8181, 8468, 8485, 8487, 8489, 8494, 8527, 11311, 11359, 11687, 11695,
         11703, 11711, 11719, 11727, 11735, 12448, 12539, 43010, 43014, 43019, 43587,
         43696, 43713, 64286, 64297, 64311, 64317, 64319, 64322, 64325, 65141];
    var i, j, start, end;
    for (i = 0; i < singles.length; i++) {
        result[singles[i]] = true;
    }
    var ranges = [[0, 47], [58, 64], [91, 94], [123, 169], [171, 177], [182, 184], [706, 709],
         [722, 735], [741, 747], [751, 879], [888, 889], [894, 901], [1154, 1161],
         [1318, 1328], [1367, 1368], [1370, 1376], [1416, 1487], [1515, 1519], [1523, 1568],
         [1611, 1631], [1642, 1645], [1750, 1764], [1767, 1773], [1789, 1790], [1792, 1807],
         [1840, 1868], [1958, 1968], [1970, 1983], [2027, 2035], [2038, 2041], [2043, 2047],
         [2070, 2073], [2075, 2083], [2085, 2087], [2089, 2307], [2362, 2364], [2366, 2383],
         [2385, 2391], [2402, 2405], [2419, 2424], [2432, 2436], [2445, 2446], [2449, 2450],
         [2483, 2485], [2490, 2492], [2494, 2509], [2511, 2523], [2530, 2533], [2546, 2547],
         [2554, 2564], [2571, 2574], [2577, 2578], [2618, 2648], [2655, 2661], [2672, 2673],
         [2677, 2692], [2746, 2748], [2750, 2767], [2769, 2783], [2786, 2789], [2800, 2820],
         [2829, 2830], [2833, 2834], [2874, 2876], [2878, 2907], [2914, 2917], [2930, 2946],
         [2955, 2957], [2966, 2968], [2976, 2978], [2981, 2983], [2987, 2989], [3002, 3023],
         [3025, 3045], [3059, 3076], [3130, 3132], [3134, 3159], [3162, 3167], [3170, 3173],
         [3184, 3191], [3199, 3204], [3258, 3260], [3262, 3293], [3298, 3301], [3312, 3332],
         [3386, 3388], [3390, 3423], [3426, 3429], [3446, 3449], [3456, 3460], [3479, 3481],
         [3518, 3519], [3527, 3584], [3636, 3647], [3655, 3663], [3674, 3712], [3717, 3718],
         [3723, 3724], [3726, 3731], [3752, 3753], [3764, 3772], [3774, 3775], [3783, 3791],
         [3802, 3803], [3806, 3839], [3841, 3871], [3892, 3903], [3949, 3975], [3980, 4095],
         [4139, 4158], [4170, 4175], [4182, 4185], [4190, 4192], [4194, 4196], [4199, 4205],
         [4209, 4212], [4226, 4237], [4250, 4255], [4294, 4303], [4349, 4351], [4686, 4687],
         [4702, 4703], [4750, 4751], [4790, 4791], [4806, 4807], [4886, 4887], [4955, 4968],
         [4989, 4991], [5008, 5023], [5109, 5120], [5741, 5742], [5787, 5791], [5867, 5869],
         [5873, 5887], [5906, 5919], [5938, 5951], [5970, 5983], [6001, 6015], [6068, 6102],
         [6104, 6107], [6109, 6111], [6122, 6127], [6138, 6159], [6170, 6175], [6264, 6271],
         [6315, 6319], [6390, 6399], [6429, 6469], [6510, 6511], [6517, 6527], [6572, 6592],
         [6600, 6607], [6619, 6655], [6679, 6687], [6741, 6783], [6794, 6799], [6810, 6822],
         [6824, 6916], [6964, 6980], [6988, 6991], [7002, 7042], [7073, 7085], [7098, 7167],
         [7204, 7231], [7242, 7244], [7294, 7400], [7410, 7423], [7616, 7679], [7958, 7959],
         [7966, 7967], [8006, 8007], [8014, 8015], [8062, 8063], [8127, 8129], [8141, 8143],
         [8148, 8149], [8156, 8159], [8173, 8177], [8189, 8303], [8306, 8307], [8314, 8318],
         [8330, 8335], [8341, 8449], [8451, 8454], [8456, 8457], [8470, 8472], [8478, 8483],
         [8506, 8507], [8512, 8516], [8522, 8525], [8586, 9311], [9372, 9449], [9472, 10101],
         [10132, 11263], [11493, 11498], [11503, 11516], [11518, 11519], [11558, 11567],
         [11622, 11630], [11632, 11647], [11671, 11679], [11743, 11822], [11824, 12292],
         [12296, 12320], [12330, 12336], [12342, 12343], [12349, 12352], [12439, 12444],
         [12544, 12548], [12590, 12592], [12687, 12689], [12694, 12703], [12728, 12783],
         [12800, 12831], [12842, 12880], [12896, 12927], [12938, 12976], [12992, 13311],
         [19894, 19967], [40908, 40959], [42125, 42191], [42238, 42239], [42509, 42511],
         [42540, 42559], [42592, 42593], [42607, 42622], [42648, 42655], [42736, 42774],
         [42784, 42785], [42889, 42890], [42893, 43002], [43043, 43055], [43062, 43071],
         [43124, 43137], [43188, 43215], [43226, 43249], [43256, 43258], [43260, 43263],
         [43302, 43311], [43335, 43359], [43389, 43395], [43443, 43470], [43482, 43519],
         [43561, 43583], [43596, 43599], [43610, 43615], [43639, 43641], [43643, 43647],
         [43698, 43700], [43703, 43704], [43710, 43711], [43715, 43738], [43742, 43967],
         [44003, 44015], [44026, 44031], [55204, 55215], [55239, 55242], [55292, 55295],
         [57344, 63743], [64046, 64047], [64110, 64111], [64218, 64255], [64263, 64274],
         [64280, 64284], [64434, 64466], [64830, 64847], [64912, 64913], [64968, 65007],
         [65020, 65135], [65277, 65295], [65306, 65312], [65339, 65344], [65371, 65381],
         [65471, 65473], [65480, 65481], [65488, 65489], [65496, 65497]];
    for (i = 0; i < ranges.length; i++) {
        start = ranges[i][0];
        end = ranges[i][1];
        for (j = start; j <= end; j++) {
            result[j] = true;
        }
    }
    return result;
})();

function splitQuery(query) {
    var result = [];
    var start = -1;
    for (var i = 0; i < query.length; i++) {
        if (splitChars[query.charCodeAt(i)]) {
            if (start !== -1) {
                result.push(query.slice(start, i));
                start = -1;
            }
        } else if (start === -1) {
            start = i;
        }
    }
    if (start !== -1) {
        result.push(query.slice(start));
    }
    return result;
}



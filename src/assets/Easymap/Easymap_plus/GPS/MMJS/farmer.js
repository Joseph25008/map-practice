﻿
if (window.MM) {
    MM = window.MM;
} else {
    window.MM = {};
}

(function (MM) {

    MM.farmer = {};

    /// <summary>
    /// 解析路號8碼
    /// </summary>
    MM.farmer.check_landno = function (id) {

        var obj49 = document.getElementById(id);
        var SP, TL, TR, L, R;
            if (MM.alert != undefined) {
                MM.alert("尚未輸入地號");
            } else {
                alert("尚未輸入地號");
            }
            
            return false;
        }
            if (MM.alert != undefined) {
                MM.alert("尚未輸入地號");
            } else {
                alert("尚未輸入地號");
            }
        }
            TL = obj49.value;
        }
            TL = obj49.value.substr(0, SP);
        }
                if (MM.alert != undefined) {
                    MM.alert("輸入錯誤");
                } else {
                    alert("輸入錯誤");
                }
            }
        }
    }

    /// <summary>
    /// 地號八碼轉成dash的格式
    /// </summary>
    MM.farmer.landno8_to_dash = function (landno) {

        if (landno.length != 8) return landno;

        var f = landno.substr(0, 4);
        var t = landno.substr(4, 4);

        var df = parseInt(f);
        var dt = parseInt(t);

        if (dt > 0) {
            return df + "-" + dt;
        } else {
            return df;
        }
    }

    MM.farmer.LPAD = function (txt, chr, flen) {
        var cnt, lp;
        lp = flen - txt.length;
    }
})(MM);



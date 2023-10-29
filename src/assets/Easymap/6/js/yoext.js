var is_ie = /*@cc_on!@*/0;
function isArray(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        return true;
    }
    return false;
}
function findPos(obj) {
    var curleft = curtop = 0;
    if (obj.offsetParent) {
        curleft = obj.offsetLeft
        curtop = obj.offsetTop
        while (obj = obj.offsetParent) {
            curleft += obj.offsetLeft
            curtop += obj.offsetTop
        }
    }
    return [curleft, curtop];
}

function goclone(source) {
    if (Object.prototype.toString.call(source) === '[object Array]') {
        var clone = [];
        for (var i = 0; i < source.length; i++) {
            clone[i] = goclone(source[i]);
        }
        return clone;
    } else if (typeof (source) == "object") {
        var clone = {};
        for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
                clone[prop] = goclone(source[prop]);
            }
        }
        return clone;
    } else {
        return source;
    }
}



Array.prototype.clone = function () {
    /// <summary>
    /// �ƻs�}�C
    /// </summary>
    return this.slice(0);
};
Array.prototype.max = function () {
    /// <summary>
    /// ��̤j��
    /// </summary>
    var max = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++) if (this[i] > max) max = this[i];
    return max;
};
Array.prototype.min = function () {
    /// <summary>
    /// ��̤p��
    /// </summary>
    var min = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++) if (this[i] < min) min = this[i];
    return min;
};
Array.prototype.sum = function () {
    /// <summary>
    /// �`�M
    /// </summary>
    var sum = 0;
    for (var i = 1; i < this.length; i++) {
        if (isNaN(this[i])) return false;

        sum += this[i];
    }
    return sum;
};
Array.prototype.average = function () {
    /// <summary>
    /// �p�⥭��
    /// </summary>

    switch (this.length) {
        case 0:
            return 0;
            break;
        case 1:
            return this[0];
            break;

    }
    return (this.sum() / (this.length - 1));

};
Array.prototype.inArray = function (value) {
    /// <summary>
    /// ��J�Ȧ��S���bArray�̭�
    /// </summary>
    /// <param name="value"></param>
    /// <returns type=""></returns>

    var i;
    for (i = 0; i < this.length; i++) {
        // Matches identical (===), not just similar (==).
        if (this[i] === value) {
            return true;
        }
    }
    return false;
};
Array.prototype.inArrayPosition = function (value) {
    /// <summary>
    /// ��J���Ȧb���ӯ��ަ�l
    /// </summary>
    /// <param name="value"></param>
    /// <returns type=""></returns>
    var i;
    for (i = 0; i < this.length; i++) {
        // Matches identical (===), not just similar (==).
        if (this[i] === value) {
            return i;
        }
    }
    return false;
};
Array.prototype.sw = function (p0, p1) {
    /// <summary>
    /// �洫���ަ�l
    /// </summary>
    /// <param name="p0"></param>
    /// <param name="p1"></param>
    var tmp = null;
    tmp = this[p1];
    this[p1] = this[p0];
    this[p0] = tmp;

};
Array.prototype.indexPop = function (index) {
    /// <summary>
    /// �R�����ަ�l
    /// </summary>
    /// <param name="index"></param>
    if (index == null) return;

    this.sw(index, this.length - 1);
    this.pop();
}

Date.isLeapYear = function (year) {
    /// <summary>
    /// �O�_���|�~
    /// </summary>
    /// <param name="year"></param>
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
};
Date.prototype.isLeapYear = function () {
    /// <summary>
    /// �O�_���|�~
    /// </summary>
    return Date.isLeapYear(this.getFullYear());
};

Date.getDaysInMonth = function (year, month) {
    /// <summary>
    /// �Y�릳�X��
    /// </summary>
    /// <param name="year"></param>
    /// <param name="month"></param>
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};
Date.prototype.getDaysInMonth = function () {
    /// <summary>
    /// �Y�릳�X��
    /// </summary>
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};
Date.prototype.addDays = function (days) {
    /// <summary>
    /// �[�Ѽ�
    /// </summary>
    /// <param name="days"></param>
    /// <returns type=""></returns>
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}
Date.prototype.addMonths = function (value) {
    /// <summary>
    /// �[���
    /// </summary>
    /// <param name="value"></param>
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};
Date.prototype.yyyyMMdd = function () {
    /// <summary>
    /// DateFormat
    /// </summary>
    return this.format("yyyyMMdd");
};
Date.prototype.yyyyMMddhhmm = function () {
    /// <summary>
    /// DateFormat
    /// </summary>
    return this.format("yyyyMMddHHmm");
};
Date.prototype.yyyyMMddHHmmss = function () {
    /// <summary>
    /// DateFormat
    /// </summary>
    return this.format("yyyyMMddHHmmss");
};
Date.prototype.format = function (formatstring) {
    /// <summary>
    /// DateFormat
    /// </summary>
    /// <param name="formatstring"></param>

    var yyyy = this.getFullYear().toString();
    var MM = (this.getMonth() + 1).toString(); // getMonth() is zero-based
    var dd = this.getDate().toString();
    var HH = this.getHours().toString();
    var mm = this.getMinutes().toString();
    var ss = this.getSeconds().toString();

    MM = (MM[1] ? MM : "0" + MM[0]);
    dd = (dd[1] ? dd : "0" + dd[0]);
    HH = (HH[1] ? HH : "0" + HH[0]);
    mm = (mm[1] ? mm : "0" + mm[0]);
    ss = (ss[1] ? ss : "0" + ss[0]);

    formatstring = formatstring.replace("yyyy", yyyy);
    formatstring = formatstring.replace("MM", MM);
    formatstring = formatstring.replace("dd", dd);
    formatstring = formatstring.replace("HH", HH);
    formatstring = formatstring.replace("mm", mm);
    formatstring = formatstring.replace("ss", ss);

    return formatstring;
};
Date.diff = function (a, b, ms) {

    if (!ms) ms = 1000;
    // Discard the time and time-zone information.
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / ms);
}
Date.diffInDays = function (a, b) {
    return Date.diff(a, b, 1000 * 60 * 60 * 24);
}

String.prototype.IsNullOrEmpty = function (str) {

    if (this.length <= 0) return true;
    if (str === "") return true;

    return false;
}

String.prototype.trim = function () {
    /// <summary>
    ///�h���Y���ť� 
    /// </summary>
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.lTrim = function () {
    /// <summary>
    /// �h�������]�Y�^�ť�
    /// </summary>
    return this.replace(/(^\s*)/g, "");
}
String.prototype.rTrim = function () {
    /// <summary>
    /// �h���k���]���^�ť�
    /// </summary>
    return this.replace(/(\s*$)/g, "");
}
String.prototype.Trim = function () {
    /// <summary>
    /// �Q��LTrim�BRTrim�ӹ갵��trim
    /// </summary>
    return this.lTrim().rTrim();
}



String.format = function () {
    /// <summary>
    /// �i�bJavascript���ϥΦp�PC#����string.format
    /// �ϥΤ覡 : var fullName = String.format('Hello. My name is {0} {1}.', 'FirstName', 'LastName');
    /// </summary>
    /// <returns type=""></returns>
    var s = arguments[0];
    if (s == null) return "";
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = getStringFormatPlaceHolderRegEx(i);
        s = s.replace(reg, (arguments[i + 1] == null ? "" : arguments[i + 1]));
    }
    return cleanStringFormatResult(s);
}

String.prototype.format = function () {
    /// <summary>
    /// �i�bJavascript���ϥΦp�PC#����string.format (��jQuery String���X�R��k)
    /// �ϥΤ覡 : var fullName = 'Hello. My name is {0} {1}.'.format('FirstName', 'LastName');
    /// </summary>
    /// <returns type=""></returns>
    var txt = this.toString();
    for (var i = 0; i < arguments.length; i++) {
        var exp = getStringFormatPlaceHolderRegEx(i);
        txt = txt.replace(exp, (arguments[i] == null ? "" : arguments[i]));
    }
    return cleanStringFormatResult(txt);
}







//����J���r��i�H�]�t{}
function getStringFormatPlaceHolderRegEx(placeHolderIndex) {
    return new RegExp('({)?\\{' + placeHolderIndex + '\\}(?!})', 'gm')
}
//��format�榡���h�l��position�ɡA�N���|�N�h�l��position��X
//ex:
// var fullName = 'Hello. My name is {0} {1} {2}.'.format('firstName', 'lastName');
// ��X�� fullName �� 'firstName lastName', �Ӥ��|�O 'firstName lastName {2}'
function cleanStringFormatResult(txt) {
    if (txt == null) return "";
    return txt.replace(getStringFormatPlaceHolderRegEx("\\d+"), "");
}


﻿(function (a, b) {
    t = new Array();
    a.clock = { version: "1.0.0", locale: {} };
    a.fn.clock = function (d) {
        var c = {
            it: {
                weekdays: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
                months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
            },
            en: {
                weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            es: {
                weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                months: ["Enero", "Febrero", "Marzo", "Abril", "May", "junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            },
            de: {
                weekdays: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                months: ["Januar", "Februar", "März", "April", "könnte", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
            },
            fr: {
                weekdays: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                months: ["Janvier", "Février", "Mars", "Avril", "May", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
            },
            ru: {
                weekdays: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
            }
        };
        return this.each(function () {
            a.extend(c, a.clock.locale);
            d = d || {};
            d.timestamp = d.timestamp || "z";
            y = new Date();
            yd = y.getDOY();
            yw = y.getWeek(6);
            y = y.getTime();
            d.sysdiff = 0;
            if (d.timestamp != "z") {
                m = new Date(d.timestamp);
                d.sysdiff = d.timestamp - y
            }
            d.langSet = d.langSet || "en";
            d.format = d.format || ((d.langSet != "en") ? "24" : "12");
            d.calendar = d.calendar || "true";
            if (!a(this).hasClass("jqclock")) {
                a(this).addClass("jqclock")
            }
            var e = function (g) {
                if (g < 10) {
                    g = "0" + g
                }
                return g
            },
                f = function (j, n) {
                    var r = a(j).attr("id");
                    if (n == "destroy") {
                        clearTimeout(t[r])
                    } else {
                        m = new Date().getTime() - n.sysdiff;
                        m = new Date(m);
                        var p = m.getHours(),
                            l = m.getMinutes(),
                            v = m.getSeconds(),
                            u = m.getDay(),
                            i = m.getDate(),
                            k = m.getMonth(),
                            q = m.getFullYear(),
                            o = "",
                            g = "",
                            w = n.langSet;
                        if (n.format == "12") {
                            o = " AM";
                            if (p > 11) {
                                o = " PM"
                            }
                            if (p > 12) {
                                p = p - 12
                            }
                            if (p == 0) {
                                p = 12
                            }
                        }
                        /* p = e(p); */
                        l = e(l);
                        v = e(v);
                        if (n.calendar != "false") {
                            ospc1 = "<li><span style='color:White;'>=============</span></li>";
                            otime = "<li><span class='clocktime'>" + p + ":" + l + ":" + v + o + "</span></li>";
                            oday = "<li><span class='clockdate'>" + c[w].weekdays[u] + "</span></li>";
                            oyear = "<li><span class='clockdate'>" + c[w].months[k] + " " + i + ", " + q + "</span></li>";
                            ospc = "<li>&nbsp;</li>";
                            oatr = "<li><span class='attribution'>&#151; Day " + yd + "  &nbsp;&nbsp;&#149;&nbsp;&nbsp;  Week " + yw + "</span></li>";
                        }
                        a(j).html("<ul>" + ospc1 + oday + otime + oyear + ospc + oatr + "</ul>");
                        t[r] = setTimeout(function () {
                            f(a(j), n)
                        }, 1000)
                    }
                };
            f(a(this), d)
        })
    };
    return this
})(jQuery);
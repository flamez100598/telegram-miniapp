var giga = {
    ready: function (a) {
        (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? a() : document.addEventListener("DOMContentLoaded", a);
    },
    showTool: function () {
        console.log(giga.initiated);
        if ("undefined" == typeof window.gigainit || !window.gigainit) {
            window.gigainit = !0;
            for (var a = 0; 5 > a && void 0 != document.querySelectorAll("div.gigacalculator")[a]; a++) {
                var b = document.querySelectorAll("div.gigacalculator")[a].getAttribute("data-tool"),
                    c = document.querySelectorAll("div.gigacalculator")[a].getAttribute("data-width");
                b = 0 < b.indexOf("?") ? b + "&" : b + "?";
                document.querySelectorAll("div.gigacalculator")[a].style = "width: " + c + "px;";
                document.querySelectorAll("div.gigacalctitle")[a].style =
                    'font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"; font-size: 1.3rem; color: #1b6997 !important; text-align: center; background-color: #f6f6f6; border-radius: 0.25rem; padding-top: 0.75rem; padding-bottom: 1rem; margin-bottom: -0.25rem;';
                document.querySelectorAll("div.gigacalcfooter")[a].style =
                    'font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"; font-size: 0.9rem; color: #1b6997 !important; text-align: center; background-color: #f6f6f6; border-radius: 0.25rem; padding-top: 1rem; padding-bottom: 0.75rem; margin-top: -0.25rem; display: block !important;';
                document.querySelectorAll("div.gigacalcfooter>a")[a].style = "text-decoration: none; font-size: 12px !important; color: #1b6997 !important;";
                document.querySelectorAll("a.gigacalclink")[a].style = "text-decoration: none; color: #1b6997 !important;";
                document.querySelectorAll("a.gigacalclink")[a].innerHTML =
                    '<p>Random Teams Tennis Tools</p>';
                document
                    .querySelectorAll("div.gigacalctitle")
                    [a].insertAdjacentHTML(
                        "afterend",
                        '<iframe id="gigaframe" src="https://www.gigacalculator.com' + b + 'embed=true" style="display: block; border: none; width: 100%; margin: 0px; padding: 0px; height: 700px; visibility: visible; opacity: 1;"></iframe>'
                    );
            }
        }
    },
    resizeIframe: function () {
        iframe = document.getElementById("gigaframe");
        iframe.style.height = giga.iframeHeight + "px";
    },
    iframeHeight: 1000,
};
window.gigainit = window.gigainit || !1;

giga.ready(giga.showTool);
giga.clearResultHooks = function () {
    calcRes = document.getElementById("calcResult");
    void 0 != calcRes &&
        ((calcResDis = document.getElementById("calcResult").style.display),
        Array.prototype.forEach.call(document.querySelectorAll("form#calculator input"), function (a, b) {
            a.addEventListener("keyup", function () {
                "none" != calcResDis && (calcRes.style.display = "none");
            });
            a.addEventListener("change", function () {
                "none" != calcResDis && (calcRes.style.display = "none");
            });
        }),
        Array.prototype.forEach.call(document.querySelectorAll("form#calculator select"), function (a, b) {
            a.addEventListener("change", function () {
                "none" != calcResDis && (calcRes.style.display = "none");
            });
        }),
        Array.prototype.forEach.call(document.querySelectorAll("form#calculator radio"), function (a, b) {
            a.addEventListener("change", function () {
                "none" != calcResDis && (calcRes.style.display = "none");
            });
        }));
};
giga.ready(giga.clearResultHooks);

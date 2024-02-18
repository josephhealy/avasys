/*
-- @file        css3-wiggler-1.0.js
-- @brief       Javascript code to emulate the iPhone "delete app" animation.
-- @detail      Give elements the class "css3-wiggler" and include this script.  The script will
--              automatically set up the MouseOver and Mouse out to handle the animation.
--              More details: http://StripedCow.com/articles/css3-jquery-iphone-delete-wiggler
--
--              Note: Small issues with handling mouse out, then mouse over when called rapidly.
--
-- @verbatim
--             $HeadURL: http://svn.stripedcow.com/trunk/javascript/jquery/scripts/css3-wiggler-1.0.js $
--                  $Id: css3-wiggler-1.0.js 10 2010-10-14 23:41:44Z leestewart $
--                $Date: 2010-10-14 19:41:44 -0400 (Thu, 14 Oct 2010) $
--                 $Rev: 10 $
--              $Author: leestewart $
--              $WebURL: http://StripedCow.com $
-- @endverbatim
*/



/*
Creative Commons Attribution-ShareAlike 3.0 Unported License

You are free:
* to Share - to copy, distribute and transmit the work
* to Remix - to adapt the work

Under the following conditions:
* Attribution - You must attribute the work in the manner specified by the author or licensor (but not in any way that suggests that they endorse you or your use of the work).
* Share Alike - If you alter, transform, or build upon this work, you may distribute the resulting work only under the same or similar license to this one.

With the understanding that:
* Waiver - Any of the above conditions can be waived if you get permission from the copyright holder (http://StripedCow.com/contact-us).
* Public Domain - Where the work or any of its elements is in the public domain under applicable law, that status is in no way affected by the license.
* Other Rights - In no way are any of the following rights affected by the license:
o Your fair dealing or fair use rights, or other applicable copyright exceptions and limitations;
o The author's moral rights;
o Rights other persons may have either in the work itself or in how the work is used, such as publicity or privacy rights.
* Notice - For any reuse or distribution, you must make clear to others the license terms of this work.

The full license is avaialble: http://creativecommons.org/licenses/by-sa/3.0/legalcode
*/



function wiggle(it) {
    var direction = it.data('direction');
    var angle = it.data('angle');

    if (direction) {
        if (angle >= 3) {
            direction *= -1;

        } else if (angle <= -3) {
            direction *= -1;
        }
        angle += direction;

    } else {
        if (angle == 0) {
            return;

        } else if (angle > 0) {
            angle -= 1;

        } else {
            angle += 1;
        }
    }

    it.css({ "-webkit-transform": "rotate(" + angle + "deg)",
        "-o-transform": "rotate(" + angle + "deg)",
        "-moz-transform": "rotate(" + angle + "deg)"
    });

    it.data('angle', angle);
    it.data('direction', direction);

    setTimeout(function () { wiggle(it); }, 30);
}



jQuery.noConflict();
jQuery(window).ready(function ($) {
    // Set up default values for all Wiggler elements.
    $(".css3-wiggler").data('angle', 0);
    $(".css3-wiggler").data('direction', 0);

    // Add the MouseOver and MouseOut handlers.
    $(".css3-wiggler").mouseover(function (e) {
        $(e.target).data('direction', 1);
        setTimeout(function () { wiggle($(e.target)); }, 10);
    });

    $(".css3-wiggler").mouseout(function (e) {
        $(e.target).data('direction', 0);
    });
});
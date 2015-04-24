$(function() {
    // 設定値
    var width = 32;
    var height = 32;
    var default_frame_sequence = [1,2,3,2];
    var default_line = 1;
    var frame_interval = 200;
    var frame = 0;
    // 次のフレームに切り替える
    function nextFrame() {
        frame++;
        $('.chara_tip_trim').each(function() {
            var line = $(this).data("line") || default_line;
            var frame_sequence = $(this).data("frame_sequence") || default_frame_sequence;
            var now_frame = frame_sequence[frame % frame_sequence.length];
            var top = height * (line - 1);
            var left = width * (now_frame - 1);
            var right = left + width;
            var bottom = top + height;
            $(this).css({
                'top' : - top  + 'px',
                'left': - left + 'px',
                'clip':'rect('+
                    top + 'px,' +
                    right + 'px,' +
                    bottom + 'px,' +
                    left + 'px' +
                ')'
            });
        });
    }
    // 無駄に走らないように
    if ($('.chara_tip_trim').length) {
        var frame_interval = setInterval(function() {
            nextFrame();
        }, frame_interval);
    }
});

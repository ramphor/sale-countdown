

if ( WCSC_ajax_data.stillValid && null !== WCSC_ajax_data.endDate ) {
    let startTime    = new Date( WCSC_ajax_data.currentDate );
    let FlipDownTime = new Date( WCSC_ajax_data.endDate );
    jQuery('.wcsc-product-countdown-timer').FlipClock( ( FlipDownTime.getTime() - startTime.getTime() ) / 1000, {
        clockFace: 'DailyCounter',
        countdown: true,
        callbacks: {
            stop: function() {
                document.location.reload(true)
            }
        }
    });
}

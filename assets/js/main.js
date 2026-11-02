$(document).ready(function () {

    // تبديل الوضع الليلي وحفظه في المتصفح
    if (localStorage.getItem('themeMode') === 'dark') {
        $('body').addClass('dark-mode');
        $('#darkModeBtn').text('الوضع النهاري');
    }

    $('#darkModeBtn').on('click', function () {
        $('body').toggleClass('dark-mode');
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('themeMode', 'dark');
            $(this).text('الوضع النهاري');
        } else {
            localStorage.setItem('themeMode', 'light');
            $(this).text('الوضع الليلي');
        }
    });

    // تصفية الفعاليات في الصفحة الرئيسية حسب التصنيف المحفوظ
    var savedCategory = localStorage.getItem('preferredCategory');
    if (savedCategory && $('#quickCategories').length > 0) {
        $('.category-badge').removeClass('active');
        $('.category-badge[data-category="' + savedCategory + '"]').addClass('active');
        filterHomeCards(savedCategory);
    }

    $('.category-badge').on('click', function () {
        var selectedCat = $(this).attr('data-category');
        $('.category-badge').removeClass('active');
        $(this).addClass('active');

        localStorage.setItem('preferredCategory', selectedCat);
        filterHomeCards(selectedCat);
    });

    function filterHomeCards(category) {
        $('#homeEventsGrid .event-item').each(function () {
            var itemCat = $(this).attr('data-category');
            if (category === 'all' || itemCat === category) {
                $(this).fadeIn(250);
            } else {
                $(this).hide();
            }
        });
    }

    // فلترة صفحة الفعاليات حسب البحث والتصنيف والتاريخ
    function filterAllEventsPage() {
        var searchText = $('#searchInput').val().toLowerCase().trim();
        var selectedCat = $('#categoryFilter').val();
        var selectedDate = $('#dateFilter').val();
        var visibleCount = 0;

        $('.event-card-wrapper').each(function () {
            var cardTitle = $(this).text().toLowerCase();
            var cardCategory = $(this).attr('data-category');
            var cardDate = $(this).attr('data-date');

            var matchSearch = (searchText === '' || cardTitle.indexOf(searchText) !== -1);
            var matchCat = (selectedCat === 'all' || cardCategory === selectedCat);
            var matchDate = (selectedDate === '' || cardDate === selectedDate);

            if (matchSearch && matchCat && matchDate) {
                $(this).fadeIn(200);
                visibleCount++;
            } else {
                $(this).hide();
            }
        });

        if (visibleCount === 0) {
            $('#noEventsMsg').removeClass('d-none');
        } else {
            $('#noEventsMsg').addClass('d-none');
        }
    }

    $('#searchInput').on('keyup', filterAllEventsPage);
    $('#categoryFilter, #dateFilter').on('change', filterAllEventsPage);

    $('#resetFiltersBtn').on('click', function () {
        $('#searchInput').val('');
        $('#categoryFilter').val('all');
        $('#dateFilter').val('');
        filterAllEventsPage();
    });

    // عرض بيانات الفعالية المختارة في صفحة التفاصيل
    var urlParams = new URLSearchParams(window.location.search);
    var eventId = urlParams.get('id');

    var eventsData = {
        '1': {
            title: 'حفل الفرقة السيمفونية الوطنية',
            badge: 'موسيقى',
            date: 'التاريخ: الجمعة 20 تشرين الثاني 2026 - الساعة 7:00 مساءً',
            location: 'المكان: دار الأسد للثقافة والفنون (الأوبرا) - ساحة الأمويين',
            img: 'images/40.jpg',
            desc: 'تقدم الفرقة السيمفونية الوطنية أمسية موسيقية خاصة تتضمن مجموعة من المؤلفات الشرقية والكلاسيكية العالمية، بمشاركة أساتذة وطلاب المعهد العالي للموسيقى بدمشق.'
        },
        '2': {
            title: 'معرض الخريف السنوي للفن التشكيلي',
            badge: 'ثقافة',
            date: 'التاريخ: الثلاثاء 24 تشرين الثاني 2026 - الساعة 5:00 مساءً',
            location: 'المكان: خان أسعد باشا - دمشق القديمة',
            img: 'images/50.jpg',
            desc: 'معرض فني يضم أكثر من خمسين لوحة زيتية ومائية لطلاب وخريجي كلية الفنون الجميلة توثق معالم دمشق التاريخية.'
        },
        '3': {
            title: 'سباق دمشق الودي للجري',
            badge: 'رياضة',
            date: 'التاريخ: الجمعة 27 تشرين الثاني 2026 - الساعة 8:00 صباحاً',
            location: 'المكان: مدينة الجلاء الرياضية - أوتستراد المزة',
            img: 'images/60.jpg',
            desc: 'نشاط رياضي صباحي لمسافة 5 كيلومترات مفتوح لطلاب الجامعات والهواة بالتعاون مع الاتحاد الرياضي العام.'
        },
        '4': {
            title: 'مهرجان العائلة والطفل الترفيهي',
            badge: 'عائلي',
            date: 'التاريخ: الأربعاء 2 كانون الأول 2026 - الساعة 4:00 عصراً',
            location: 'المكان: حديقة تشرين - منطقة البرامكة',
            img: 'images/70.jpg',
            desc: 'فعالية عائلية تشمل عروض مسرح عرائس ومسابقات رسم للأطفال مع بازار للأعمال اليدوية والمنتجات المحلية.'
        },
        '5': {
            title: 'مسابقة البرمجة الجامعية وتصميم الويب',
            badge: 'تقنية',
            date: 'التاريخ: السبت 5 كانون الأول 2026 - الساعة 10:00 صباحاً',
            location: 'المكان: كلية الهندسة المعلوماتية - جامعة دمشق',
            img: 'images/80.jpg',
            desc: 'منافسة علمية بين الفرق الطلابية لتطوير مواقع وتطبيقات خدمية خلال يومين من العمل الجماعي بإشراف أساتذة الكلية.'
        },
        '6': {
            title: 'معرض تبادل الكتب والمراجع الجامعية',
            badge: 'ثقافة',
            date: 'التاريخ: الخميس 10 كانون الأول 2026 - الساعة 11:00 صباحاً',
            location: 'المكان: المركز الثقافي العربي - أبو رمانة',
            img: 'images/90.jpg',
            desc: 'مبادرة طلابية لتبادل المراجع الدراسية والروايات الأدبية بأسعار رمزية مع جلسات نقاش مفتوحة حول القراءة.'
        }
    };

    if (eventId && eventsData[eventId] && $('#detailTitle').length > 0) {
        var currentEvent = eventsData[eventId];
        $('#detailTitle').text(currentEvent.title);
        $('#detailBadge').text(currentEvent.badge);
        $('#detailDate').text(currentEvent.date);
        $('#detailLocation').text(currentEvent.location);
        $('#detailMainImg').attr('src', currentEvent.img);
        $('#detailDesc').text(currentEvent.desc);
    }

    // أزرار التفاعل والحجز في صفحة التفاصيل
    $('#addToCalendarBtn').on('click', function () {
        $('#eventActionAlert')
            .removeClass('d-none alert-info')
            .addClass('alert-success')
            .text('تمت إضافة تذكير بموعد الفعالية إلى التقويم بنجاح.')
            .hide()
            .fadeIn(300);
    });

    $('#shareEventBtn').on('click', function () {
        var pageUrl = window.location.href;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(pageUrl);
        }
        $('#eventActionAlert')
            .removeClass('d-none alert-success')
            .addClass('alert-info')
            .text('تم نسخ رابط الصفحة إلى الحافظة.')
            .hide()
            .fadeIn(300);
    });

    $('#bookingForm').on('submit', function (e) {
        e.preventDefault();
        var attendeeName = $('#bookName').val().trim();
        var seatsCount = $('#bookSeats').val();
        if (attendeeName !== '') {
            $('#bookingResultAlert')
                .removeClass('d-none')
                .text('تم تسجيل الحضور باسم (' + attendeeName + ') لعدد بطاقات: ' + seatsCount);
            $('#bookName').val('');
        }
    });

    // التحقق من حقول نموذج اتصل بنا
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        var nameVal = $('#contactName').val().trim();
        var emailVal = $('#contactEmail').val().trim();
        var msgVal = $('#contactMessage').val().trim();
        var alertContainer = $('#contactAlertBox');

        if (nameVal === '' || emailVal === '' || msgVal === '') {
            alertContainer.html(
                '<div class="alert alert-danger alert-dismissible fade show" role="alert">' +
                '<strong>تنبيه:</strong> يرجى تعبئة جميع الحقول المطلوبة قبل الإرسال.' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' +
                '</div>'
            );
            return;
        }

        if (emailVal.indexOf('@') === -1 || emailVal.indexOf('.') === -1) {
            alertContainer.html(
                '<div class="alert alert-warning alert-dismissible fade show" role="alert">' +
                '<strong>خطأ في البريد الإلكتروني:</strong> يرجى كتابة البريد الإلكتروني بصيغة صحيحة.' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' +
                '</div>'
            );
            return;
        }

        if (msgVal.length < 10) {
            alertContainer.html(
                '<div class="alert alert-warning alert-dismissible fade show" role="alert">' +
                '<strong>النص قصير جداً:</strong> يرجى كتابة 10 أحرف على الأقل في حقل الرسالة.' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' +
                '</div>'
            );
            return;
        }

        alertContainer.html(
            '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
            '<strong>تم الإرسال بنجاح:</strong> شكراً لك ' + nameVal + '، تم استلام رسالتك وسنقوم بمراجعتها قريباً.' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' +
            '</div>'
        );

        $('#contactForm')[0].reset();
    });

    // زر الصعود للأعلى
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 250) {
            $('#scrollTopBtn').fadeIn(200);
        } else {
            $('#scrollTopBtn').fadeOut(200);
        }
    });

    $('#scrollTopBtn').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
    });

});
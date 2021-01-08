const conferences = _ => {
    console.log('ahihi')
    $(_ => {
        $.ajax({
            url: '/conference',
            method: 'GET',
            dataType: 'json',
            data,
            timeout: 10000
        }).done(data => {
            console.log('data: ', data);
        });
    });
}
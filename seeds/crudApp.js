exports.seed = function(knex, Promise) {
    return knex('albums').del()
        .then(function() {
            const albums = [{
                artist: 'coldplay',
                name: 'tim',
                genre: 'rock',
                stars: 5,
                explicit: false
            }, {
                artist: 'boldplay',
                name: 'mim',
                genre: 'bock',
                stars: 4,
                explicit: false
            }];

            return knex('albums').insert(albums);
        });
};

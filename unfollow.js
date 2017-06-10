function checkUnfollowers() {
    var users = $('.ProfileCard-content');

    $(users).each(function() {
        following = $(this).find('.FollowStatus').text();

        if(!following) {
            name = $(this).find('.fullname.ProfileNameTruncated-link.u-textInheritColor.js-nav').text();
            username = $(this).find('.u-linkComplex-target').text();
            unfollowButton = $(this).find('.EdgeButton.EdgeButton--danger.EdgeButton--small.button-text.unfollow-text');

            if (confirm(name + ' (@' + username + ')\n is not following you, unfollow?')) {
                $(unfollowButton).click();
            }
        }
    });
}

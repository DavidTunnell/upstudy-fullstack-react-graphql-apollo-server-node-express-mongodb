example categories: https://tutorbin.com/online-homework-help/
user functionality: https://flatlogic.com/templates/user-management-react
-gamify contribution - https://i.imgur.com/N5th0rO.png - https://openbase.com/leaderboard
-consider using cache for better performance (reduces db calls)- https://i.imgur.com/kjEpUyZ.png - https://i.imgur.com/
-add a discord and a twitter and other social media links for the 'site'

-social login (google, fb, apple?) - future

-for voting on links, look at week 21 mini project it has voting

app:
-mains screen : each major category - meta discussion page link for this and all the way down, and also a creatable wiki faq page editable by mods
inside, each sub category - apply to be a mod, suggest a sub category, or click in to a category, also search just for the page - meta discussion link forum
-this means i need to add user types, admin, mod, user
-once clicked into a sub category are each of the subjects (for js: closures, oop, variables, every subject), add search for this page too
-click into one and it opens up the link list with voting, each one is a container with commenting and voting on comments, add search

known bug:
-when authentication times out and you are logged out - has to do with this on header:
{/\_ {!user.isVerified && (

<li className="nav-item">
<Link
                                                    className="nav-link"
                                                    to="/verify"
                                                >
Verify Email
</Link>
</li>
)} _/}

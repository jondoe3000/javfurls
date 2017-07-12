GITNAME="$(git config --global user.name)";
GITEMAIL="$(git config --global user.email)";
# echo $GITNAME;
# echo $GITEMAIL;

git config --global user.name "JonDoe" --replace-all;
git config --global user.email  "JonDoe@mail.com" --replace-all;

git config --get user.name;
git config --get user.email;

git init;
#heroku git:remote -a javfurls;
git remote add origin https://jondoe3000:2m1207bGB@github.com/jondoe3000/javfurls.git;


git config --global user.name $GITNAME --replace-all;
git config --global user.email $GITEMAIL --replace-all;


git config --get user.name;
git config --get user.email;

# git add -A;
# git commit -m "$1";
# git push -f heroku master;
# git push -f origin master;

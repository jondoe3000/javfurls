GITNAME="$(git config --global user.name)";
GITEMAIL="$(git config --global user.email)";
# echo $GITNAME;
# echo $GITEMAIL;

git config --global user.name "JonDoe" --replace-all;
git config --global user.email  "JonDoe@mail.com" --replace-all;

git config --get user.name;
git config --get user.email;

git config --global user.name $GITNAME --replace-all;
git config --global user.email $GITEMAIL --replace-all;


git config --get user.name;
git config --get user.email;
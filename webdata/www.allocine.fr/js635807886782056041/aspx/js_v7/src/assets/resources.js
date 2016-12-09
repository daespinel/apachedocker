
var AC = window.AC || {};
AC.resources = {
global : {
yes : 'Oui',
no : 'Non',
ERR_DEFAULT : 'Une erreur est survenue, merci de réessayer ultérieurement.',
deleted : 'supprimé',
cancel : 'Annuler',
URL_NEW_IMAGE : 'https://fr.web.img1.acsta.net/commons/tooltip/FR/picto_new.png',
validation : {
EMPTY : 'Votre message ne peut être vide !',
TOO_LONG : 'Votre message ne doit pas dépasser $max caractères.',
TOO_SHORT : 'Votre message ne peut pas être inférieur à $min caractères.'
},
backToTop : 'Haut de page',
uiCulture : 'fr-FR'
},
thirdParty : {
twitter : {
FEED : 'On en parle sur Twitter',
OFFICIAL_ACCOUNT : 'Son compte officiel Twitter',
SERIES_FEED : 'On en parle sur Twitter',
SERIES_OFFICIAL_ACCOUNT : 'Son compte officiel Twitter',
FOOTER_TEXT : 'Plus de tweets sur Twitter'
},
disqus : {
LOGIN_REQUIRED : 'Vous devez <span class=\"link underline\">vous connecter</span> pour écrire un commentaire',
TITLE : 'Commentaires',
IMG : 'https://fr.web.img1.acsta.net/commons/webui/FR/misc/disqus-sso-login-button.png'
},
facebook : {
INVITE_MESSAGE : 'Rejoints-moi sur AlloCiné',
SocialAccountLinkedToOtherUserAccount : 'Vous avez déjà un compte allociné créé via facebook. Pour y accéder, déconnectez-vous et re-connectez-vous via Facebook.',
SocialAccountLinkedToOtherUserAccountTitle: 'Compte facebook existant'
}
},
template : {
memberCreatedFrom : 'Membre depuis ${daysBeetweenCreation} jours',
whatWillYourReviewBe : 'Quelle sera votre critique n°${reviewCount} ?',
toolTipMovieImagePoster : 'https://images.allocine.fr/r_75_160/b_1_cfd7e1/{poster}',
toolTipEmptyMovieImagePoster : 'https://fr.web.img4.acsta.net/r_75_160/commons/emptymedia/empty_photo.jpg',
toolTipDirectorTitle : 'Réalisateur : ',
toolTipCreatorTitle : 'Créateur :',
toolTipCastingTitle : 'Avec :',
toolTipTypeTitle : 'Genre : ',
dash : ' - ',
dash : ', ',
pipe : ' | ',
pagernext : 'Suivante',
pagerprev : 'Précédente '
},
comments : {
previous : 'Précédente ',
next : 'Suivante'
},
confirm : {
basic : {
yes : 'Oui',
no : 'Non',
},
remove : {
yes : 'OK, supprimer',
no : 'Annuler'
}
},
displayTabs : {
NO_THEATERS_LOGGEDIN : 'Aucune séance dans mes cinémas',
MY_THEATERS_LOGGEDIN : '{0} mes cinemas favoris',
MY_THEATERS_LOGGEDOUT : 'Voir les séances dans mes cinemas'
},
interest : {
Movie : {
ratedLabelPlural : 'Vous avez noté ce film <strong>{0} étoiles.</strong>',
ratedLabelSingular : 'Vous avez noté ce film <strong>{0} étoile.</strong>'
},
Series : {
ratedLabelPlural : 'Vous avez noté cette série <strong>{0} étoiles.</strong>',
ratedLabelSingular : 'Vous avez noté cette série <strong>{0} étoile.</strong>'
}
},
message : {
review : '<span class=\"tt_18\">Merci ! Votre critique sera rapidement publiée.</span><br/>Merci de noter que cela peut prendre jusqu\'à 24 heures.',
emailAccountNotActivated : '<span class=\"tt_18\">Désolé ! Vous devez d\'abord activer votre compte Mon AlloCiné.</span><br/><a href=\"(activationurl)\">Reprenez la procédure ici</a> afin de pouvoir publier votre contenu.',
activation : {
review : '<span class=\"tt_18\">Désolé ! Vous devez d\'abord activer votre compte Mon AlloCiné.</span><br/><a href=\"(activationurl)\">Reprenez la procédure ici</a> afin de pouvoir publier votre contenu.',
game : '<span class=\"tt_18\">Désolé ! Votre Compte doit être activé.</span><br/>Merci de <a href=\"(activationurl)\">cliquer ici</a> pour pouvoir jouer',
comment : '<span class=\"tt_18\">Désolé ! Votre Compte doit être activé.</span><br/>Merci de <a href=\"(activationurl)\">cliquer ici</a> pour pouvoir commenter'
}
},
rating : {
labels : {
'0' : '0 : Pourri',
'0.5' : '0,5 : Nul',
'1' : '1 : Très mauvais',
'1.5' : '1,5 : Mauvais',
'2' : '2 : Pas terrible',
'2.5' : '2,5 : Moyen',
'3' : '3 : Pas mal',
'3.5' : '3,5 : Bien',
'4' : '4 : Très bien',
'4.5' : '4,5 : Excellent',
'5' : '5 : Chef-d\'œuvre'
}
},
restAPI : {
url : ''
},
list : {
remove : {
MOVIE : 'Souhaitez-vous vraiment supprimer #movie# ?',
PERSON : 'Souhaitez-vous vraiment supprimer #person# ?',
RELATIONSHIP : 'Etes-vous sûr(e) de vouloir supprimer #relationship# de cette liste ?',
SERIES : 'Souhaitez-vous vraiment supprimer #series# ?',
EPISODE : 'Etes-vous sûr de vouloir marquer cet épisode comme non vu ? ',
THEATER : 'Souhaitez-vous vraiment supprimer #theater# ?'
},
title : {
SERIESSEASON : '{titleSerie} - Saison {seasonNumber}',
SERIESEPISODE : '{titleSerie} - Saison {seasonNumber} - Episode {episodeNumber}'
}
},
opinion : {
warningRemoveTitle : 'Supprimer ma note',
warningRemove : 'Vous allez supprimer définitivement votre note et votre critique, sans possibilité de les récupérer. Voulez-vous supprimer votre note et votre critique ?',
confirmRemove : 'OK, supprimer',
cancelRemove : 'Annuler',
removeFromRating : 'En supprimant votre note, vous allez effacer définitivement votre critique, sans moyen de la récupérer par la suite. Voulez-vous supprimer votre note et votre critique ?',
removeFromReview : 'Supprimer votre critique est définitif, sans possibilité de la récupérer, et votre note <br />sera aussi supprimée. Voulez-vous supprimer votre critique et votre note ?'
},
overlay : {
OVERLAY_EMPTY_MSG: 'Votre message ne peut être vide !'
},
review : {
counterSingular : '{0} caractère',
counterPlural : '{0} caractères',
counter : '{0} sur 5000 caractères écrits',
spoiler : 'Spoiler :',
ratingLabels : {
'0' : '0 - Pourri',
'0.5' : '0.5 - Nul',
'1' : '1 - Très mauvais',
'1.5' : '1.5 - Mauvais',
'2' : '2 - Pas terrible',
'2.5' : '2.5 - Moyen',
'3' : '3 - Pas mal',
'3.5' : '3.5 - Bien',
'4' : '4 - Très bien',
'4.5' : '4.5 - Excellent',
'5' : '5 - Chef d\'oeuvre'
},
seasonDirtyWarning : 'Attention ! En choisissant une autre saison, les modifications que vous venez de faire sur votre critique vont être perdues. Vous devriez d\'abord les sauvegarder en cliquant sur le bouton \"Poster ma critique\". Voulez-vous changer de saison maintenant et perdre vos modifications ?',
seasonDirtyWarningTitle : 'Modifications non sauvegardées',
addedOn : 'Ajoutée le {0}',
dateFormat : '{dd} {MM} {yyyy} à {hh}h{mm}',
about : 'A propos de {0}',
preview : 'Aperçu',
abuse : {
Accepted : '',
Blocked : 'Votre critique a été modérée et définitivement retirée du site le {dd}/{mm}/{yyyy}. Vous ne pouvez plus publier de critique sur {title}.',
Denied : 'Votre critique a été modérée et temporairement retirée du site le {dd}/{mm}/{yyyy}. Vous pouvez <a class=\"j_login_required j_edit_button\" href=\"{url}\">la modifier</a> pour la rendre compatible avec nos règles d\'écriture. Merci de vous assurer en particulier qu\'elle ne contienne aucun \"spoiler\".',
None : '',
Pending : 'Merci pour vos modifications, elles seront bientôt vérifiées par un modérateur. Vous serez averti par email dès que votre critique est de nouveau publiée.',
Published : '',
Reported : 'Votre critique a été signalée comme \"abus\" et temporairement retirée du site le {dd}/{mm}/{yyyy}. Les modérateurs vont bientôt la vérifier et vous notifier par email de leur décision.'
}
},
tvshow : {
seeallsummaries : 'voir tous les résumés',
seelesssummaries : 'tout fermer',
summary : 'résumé',
close : 'fermer',
duration : 'Durée : ',
addChannel : 'Mes chaînes favorites',
removeChannel : 'Retirer de mes favoris'
},
social : {
buttons : {
followee : {
FBfriend : 'Ami Facebook',
ENABLED : 'Ne plus suivre',
DEFAULT : 'Suivre'
}
},
collection : {
movieCountSingular : 'Film',
movieCountPlural : 'Films',
serieCountSingular : 'Serie',
serieCountPlural : 'Series',
programCountSingular : 'Program',
programCountPlural : 'Programs',
filtersBetweenStars: 'Entre #minRange et #maxRange étoiles',
filtersFixStars: '#minRange étoiles'
}
},
feedback:{
error : 'Oops, une erreur s\'est produite, merci de recommencer dans quelques secondes !',
errortitle : 'Erreur'
},
speednoter : {
tous : 'Tous',
today : 'aujourd\'hui',
runtime : '{0}h{1}min',
from : 'De (from)',
casting : 'Avec (with)',
roles: {
manPlural: 'Ses parts',
manSingular: 'Rôle ',
womanPlural: 'Rôles : ',
womanSingular: 'Rôle ',
},
activities: {
manPlural: 'Ses activités',
manSingular: 'Son activité',
womanPlural: 'Ses activités',
womanSingular: 'Son activité',
},
releaseDate : 'Date de sortie : (release date)',
wantToSee : {
MOVIE : 'Envie de voir ce film ?',
SERIES : 'Envie de voir cette série ,'
},
rateIt : {
MOVIE : 'Déjà vu ce film ? Notez-le',
SERIES : 'Déjà vue cette série ? Notez-la'
},
endSlideMessage : {
allBrowsed: 'Félicitations ! Vous avez consulté tous les films et séries de la base de donnée AlloCiné',
allRated: 'Félicitations ! Vous avez noté tous les films et séries de la base de donnée AlloCiné',
genreAllBrowsed: 'Félicitations ! Vous avez consulté tous les (entitytype) du genre \'(genre)\'',
genreAllRated: 'Félicitations ! Vous avez noté tous les (entitytype) du genre \'(genre)\'',
movie: 'Films',
series: 'Séries',
personAllBrowsed: 'Félicitations ! Vous avez consulté tous les films et séries de la filmographie de (person)',
personAllRated: 'Félicitations ! Vous avez noté tous les films et séries de la filmographie de (person)'
},
filmo : {
title: 'Filmographie de '
}
},
theater : {
CLOSED : 'Cinéma fermé',
ADD_THEATER : 'Ajouter à mes cinémas',
ADD_THEATER_LONG : 'Pour mémoriser vos cinémas favoris, cliquez ici',
LOGGED_IN_NO_SHOWTIMES : 'Aucune séance dans mes cinémas',
LOGGED_IN_MY_SHOWTIMES : 'Voir les séances dans {0} de mes cinemas',
LOGGED_OUT_MY_SHOWTIMES : 'Voir les séances dans mes cinemas',
MY : {
NONE : 'Pour mémoriser vos cinémas favoris, commencez ici',
PLURAL : 'Vous avez {0} cinémas',
SINGULAR : 'Vous avez 1 cinéma',
MODAL_NONE : 'Aucun cinéma favori',
MODAL_PLURAL : 'Vos {0} cinémas favoris',
MODAL_SINGULAR : '1 cinéma favori'
},
REMOVE_THEATER : 'Retirer de mes cinémas',
ADDED: 'Ajouté à mes favoris',
NO_RESULTS: 'Désolé, nous n\'avons trouvé aucune salle de cinéma correspondant à la recherche \"(request)\"'
},
spinner : {
LOAD : 'Chargement...',
DOING : 'En cours...',
DONE : 'Enregistré',
images : {
blue : 'https://fr.web.img6.acsta.net/commons/webui/shared/loader_blue.gif',
black : 'https://fr.web.img4.acsta.net/commons/webui/shared/loading_black_small.gif',
blueMedium : 'https://fr.web.img5.acsta.net/commons/webui/shared/loading_blue_medium.gif'
}
},
showtimes : {
share : {
CAPTION_SHOWTIMEBEGIN: 'Début de la séance : ',
CAPTION_MINUTESAFTER: 'Film',
CAPTION_MINUTESAFTER_2: 'minutes après',
CAPTION_SHOWTIMEENDING: 'Fin de la séance : ',
CAPTION_SHOWTIMEENDING_2: '(environ)',
CAPTION_ACCOUNT_PERSONALISATION_2: 'Personnalisez votre compte AlloCiné (2/3)',
CAPTION_ACCOUNT_PERSONALISATION_1: 'Personnalisez votre compte AlloCiné (1/3)',
CAPTION_SHAREYOURSHOWTIME_BEGINNING: 'Début : ',
CAPTION_SHAREYOURSHOWTIME_START: 'Début du film : ',
CAPTION_SHAREYOURSHOWTIME_END: 'Fin : ',
CAPTION_SHAREYOURSHOWTIME_AROUND: 'environ',
CAPTION_SHAREYOURSHOWTIME_SHAREON: 'Partagez sur :',
CAPTION_SHAREYOURSHOWTIME_BY: 'De ',
CAPTION_SHAREYOURSHOWTIME_WITH: 'Avec ',
CAPTION_SHAREYOURSHOWTIME_GENRE: 'Film',
CAPTION_SHAREYOURSHOWTIME_TO_POST_WITH_TITLE: 'Je vais voir {0} au cinéma {1} le {2} à {3}',
CAPTION_SHAREYOURSHOWTIME_TO_POST_WITHOUT_TITLE: 'Je vais le voir au cinéma {0} le {1} à {2}',
CAPTION_SHAREYOURSHOWTIME_ACTION: 'Voir sur {0}',
MESSAGE_SHAREYOURSHOWTIME_SUCCEED: 'Publication correctement effectuée sur votre profil Facebook.',
MESSAGE_SHAREYOURSHOWTIME_SUCCEED_TITLE: 'Facebook',
MAIL_SUBJECT: 'Rendez-vous cinéma pour {0}',
MAIL_SYNOPSIS: 'Synopsis :',
MAIL_BODY: 'Bonjour,%0D%0DAllons voir le film {0}%0D%0DRendez-vous au cinéma {1}%0D{2}%0Dle {3}%0Dà {4}%0D%0D{5}{6}%0D%0DA bientôt!%0DJ\'ai partagé ce contenu depuis le site {7}'
},
tabs : {
CAPTION_NEXTSHOWTIME: 'Prochaines séances le ',
CAPTION_NEXTSHOWTIMES_V7: 'Prochaines séances {0} à partir du ',
CAPTION_NOMORESHOWTIME: 'Il n\'y a plus de séances pour ce film'
},
NEXT_BOOKABLE_PREVIEW_SHOWTIME: 'Prochaine(s) séance(s) en avant-première à partir du {0}, réservation disponible',
NEXT_BOOKABLE_SHOWTIME: 'Prochaine(s) séance(s) à partir du {0}, réservation possible',
NEXT_PREVIEW_SHOWTIME: 'Prochaine(s) séance(s) en avant-première à partir du {0}',
NEXT_SHOWTIME: 'Prochaine(s) séance(s) à partir du {0}',
NO_NEXT_SHOWTIME: 'Aucune séance pour ce film ',
DATE_FORMAT: '{0} {1} {2}'
},
locale : {
days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
daysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
daysMin: ["di", "lu", "ma", "me", "je", "ve", "sa"],
months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
monthsShort: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
weekMin: '',
weekStart : 1
},
share : {
connected : 'Vous êtes maintenant connecté à Facebook, nous allons partager votre contenu',
error : 'Une erreur est survenue ! Votre partage n\'a pas été pris en compte. Merci de recommencer dans quelques minutes.',
advice : 'Donner mon avis sur Mon AlloCiné',
post : 'Le partage de votre action sur Facebook s\'est bien déroulé.',
postTitle : 'Facebook',
shareCount : {
singular : 'Partage',
plural : 'Partages'
},
my : {
fan : {
facebook : {
Movie : 'Je suis fan du film {label}.',
Series : 'Je suis fan de la série {label}.',
SeriesSeason : 'Je suis fan de la saison {seasonNumber} de {label}.',
Person : 'Je suis fan de {label}',
TvShowSeason : 'Je suis fan de la saison {seasonNumber} de {label}.',
TvShow : 'Je suis fan du programme {label}.',
Program : 'Je suis fan du programme {label}.',
ProgramSeason : 'Je suis fan de la saison {seasonNumber} de {label}.'
},
twitter : {
Movie : 'Je suis fan de {label}',
Series : 'Je suis fan de {label}',
SeriesSeason : 'Je suis fan de {label} Saison {seasonNumber}.',
Person : 'Je suis fan de {label}',
TvShowSeason : 'Je suis fan de la saison {seasonNumber} de {label}.',
TvShow : 'Je suis fan du programme {label}.',
Program : 'Je suis fan de {label}',
ProgramSeason : 'Je suis fan de {label} Saison {seasonNumber}.'
}
},
rating : {
facebook : {
Movie : 'J\'ai noté {value} sur 5 le film {label}.',
Series : 'J\'ai noté {value} sur 5 la série {label}.',
SeriesSeason : 'J\'ai noté {value} sur 5 la saison {seasonNumber} de {label}.',
TvShowSeason : 'J\'ai noté {value} sur 5 la saison {seasonNumber} de {label}.',
TvShow : 'J\'ai noté {value} sur 5 l\'émission {label}.',
Program : 'J\'ai noté {value} sur 5 le programme {label}.',
ProgramSeason : 'J\'ai noté {value} sur 5 la saison {seasonNumber} de {label}.'
},
twitter : {
Movie : 'J\'ai noté {value} sur 5 {label}.',
Series : 'J\'ai noté {value} sur 5 {label}.',
SeriesSeason : 'J\'ai noté {value} sur 5 {label} Saison {seasonNumber}.',
TvShowSeason : 'J\'ai noté {value} sur 5 {label} Saison {seasonNumber}.',
TvShow : 'J\'ai noté {value} sur 5 {label}.',
Program : 'J\'ai noté {value} sur 5 {label}.',
ProgramSeason : 'J\'ai noté {value} sur 5 {label} Saison {seasonNumber}.'
}
},
review : {
facebook : {
singular : {
Movie : 'J\'ai publié une critique {value} étoile du film {label}.',
Series : 'J\'ai publié une critique {value} étoile de la série {label}.',
SeriesSeason : 'J\'ai publié une critique {value} étoile sur la saison {seasonNumber} de {label}.',
TvShowSeason : 'J\'ai publié une critique {value} étoile sur la saison {seasonNumber} de {label}.',
TvShow : 'J\'ai publié une critique {value} étoile du programme TV {label}.',
Program : 'J\'ai publié une critique {value} étoiles du programme {label}.',
ProgramSeason : 'J\'ai publié une critique {value} étoile sur la saison {seasonNumber} de {label}.'
},
plural : {
Movie : 'J\'ai publié une critique {value} étoiles sur le film \"{label}\".',
Series : 'J\'ai publié une critique {value} étoiles sur la série \"{label}\".',
SeriesSeason : 'J\'ai publié une critique {value} étoiles sur la saison {seasonNumber} de \"{label}\".',
TvShowSeason : 'J\'ai publié une critique {value} étoiles sur la saison {seasonNumber} de \"{label}\".',
TvShow : 'J\'ai publié une critique {value} étoiles sur le programme \"{label}\".',
Program : 'J\'ai publié une critique {value} étoiles à propos du programme {label}.',
ProgramSeason : 'J\'ai publié une critique {value} étoiles sur la saison {seasonNumber} de \"{label}\".'
}
},
twitter : {
singular : {
Movie : 'J\'ai publié une critique {value} étoile de {label}.',
Series : 'J\'ai publié une critique {value} étoile de {label}.',
SeriesSeason : 'J\'ai publié une critique {value} étoile de {label} - Saison {seasonNumber}.',
TvShowSeason : 'J\'ai publié une critique {value} étoile de {label} - Saison {seasonNumber}.',
TvShow : 'J\'ai publié une critique {value} étoile de {label}.',
Program : 'J\'ai publié une critique {value} étoile de {label}.',
ProgramSeason : 'J\'ai publié une critique {value} étoile de {label} - Saison {seasonNumber}.'
},
plural : {
Movie : 'J\'ai publié une critique {value} étoiles sur \"{label}\".',
Series : 'J\'ai publié une critique {value} étoiles sur \"{label}\".',
SeriesSeason : 'J\'ai publié une critique {value} étoiles sur \"{label} - Saison {seasonNumber}\".',
TvShowSeason : 'J\'ai publié une critique {value} étoiles sur \"{label} - Saison {seasonNumber}\".',
TvShow : 'J\'ai publié une critique {value} étoiles sur \"{label}\".',
Program : 'J\'ai publié une critique {value} étoiles sur \"{label}\".',
ProgramSeason : 'J\'ai publié une critique {value} étoiles sur \"{label} - Saison {seasonNumber}\".'
}
}
},
wantToSee : {
facebook : {
Movie : 'J\'ai envie de voir le film {label}.',
Series : 'J\'ai envie de voir la série {label}.',
SeriesSeason : 'J\'ai envie de voir la saison {seasonNumber} de {label}.',
TvShowSeason : 'J\'ai envie de voir la saison {seasonNumber} de {label}.',
TvShow : 'J\'ai envie de voir le programme {label}.',
Program : 'J\'ai envie de voir le programme {label}.',
ProgramSeason : 'J\'ai envie de voir la saison {seasonNumber} de {label}.'
},
twitter : {
Movie : 'J\'ai envie de voir {label}.',
Series : 'J\'ai envie de voir {label}.',
SeriesSeason : 'J\'ai envie de voir {label} Saison {seasonNumber}.',
TvShowSeason : 'J\'ai envie de voir {label} Saison {seasonNumber}.',
TvShow : 'J\'ai envie de voir {label}.',
Program : 'J\'ai envie de voir {label}.',
ProgramSeason : 'J\'ai envie de voir {label} Saison {seasonNumber}.'
}
},
notInterested : {
facebook : {
Movie : 'Je n\'ai pas envie de voir le film {label}.',
Series : 'Je n\'ai pas envie de voir la série {label}.',
SeriesSeason : 'Je n\'ai pas envie de voir la saison {seasonNumber} de {label}.',
TvShowSeason : 'Je n\'ai pas envie de voir la saison {seasonNumber} de {label}.',
TvShow : 'Je n\'ai pas envie de voir l\'émission {label}.',
Program : 'Je n\'ai pas envie de voir le programme {label}.',
ProgramSeason : 'Je n\'ai pas envie de voir la saison {seasonNumber} de {label}.'
},
twitter : {
Movie : 'Je n\'ai pas envie de voir {label}.',
Series : 'Je n\'ai pas envie de voir {label}.',
SeriesSeason : 'Je n\'ai pas envie de voir {label} Saison {seasonNumber}.',
TvShowSeason : 'Je n\'ai pas envie de voir {label} Saison {seasonNumber}.',
TvShow : 'Je n\'ai pas envie de voir {label}.',
Program : 'Je n\'ai pas envie de voir {label}.',
ProgramSeason : 'Je n\'ai pas envie de voir {label} Saison {seasonNumber}.'
}
},
Voted : {
facebook : {
MOVIE : 'J\'ai voté pour {item} dans la catégorie {category} !' ,
SERIES : 'J\'ai voté pour {item} dans la catégorie {category} !'
},
twitter : {
MOVIE : 'J\'ai voté pour {item} dans la catégorie {category} !',
SERIES : 'J\'ai voté pour {item} dans la catégorie {category} !'
}
},
CategoryWin : {
facebook : {
MOVIE : 'AlloCiné Awards : le gagnant de la catégorie {category} est {item} !',
SERIES : 'AlloCiné Awards : le gagnant de la catégorie {category} est {item} !'
},
twitter : {
MOVIE : 'AlloCiné Awards : le gagnant de la catégorie {category} est {item} !',
SERIES : 'AlloCiné Awards : le gagnant de la catégorie {category} est {item} !'
}
}
},
his : {
review : {
facebook : {
singular : {
Movie : 'Lire la critique {Review.ratingDecimal} étoiles de {Movie.label}, par {Review.userNickName}.',
Series : 'Lire la critique {Review.ratingDecimal} étoiles de {Series.label}, par {Review.userNickName}.',
SeriesSeason : 'Lire la critique {Review.ratingDecimal} étoiles de {SeriesSeason.label} - Saison {SeriesSeason.seasonNumber}, par {Review.userNickName}.',
TvShowSeason : 'Lire la critique {Review.ratingDecimal} étoiles de {TvShowSeason.label} - Saison {TvShowSeason.seasonNumber}, par {Review.userNickName}.',
TvShow : 'Lire la critique {Review.ratingDecimal} étoiles de {TvShow.label}, par {Review.userNickName}.',
Program : 'Lire la critique {Review.ratingDecimal} étoiles de {Program.label}, par {Review.userNickName}.',
ProgramSeason : 'Lire la critique {Review.ratingDecimal} étoiles de {ProgramSeason.label} - Saison {ProgramSeason.seasonNumber}, par {Review.userNickName}.'
},
plural : {
Movie : 'Lire la critique {Review.ratingDecimal} étoiles de \"{Movie.label}\", par {Review.userNickName}.',
Series : 'Lire la critique {Review.ratingDecimal} étoiles de \"{Series.label}\", par {Review.userNickName}.',
SeriesSeason : 'Lire la critique {Review.ratingDecimal} étoiles de la saison {SeriesSeason.seasonNumber} de \"{SeriesSeason.label}\", par {Review.userNickName}.',
TvShowSeason : 'Lire la critique {Review.ratingDecimal} étoiles de la saison {TvShowSeason.seasonNumber} de \"{TvShowSeason.label}\", par {Review.userNickName}.',
TvShow : 'Lire la critique {Review.ratingDecimal} étoiles de \"{TvShow.label}\", par {Review.userNickName}.',
Program : 'Lire la critique {Review.ratingDecimal} étoiles de \"{Series.label}\", par {Review.userNickName}.',
ProgramSeason : 'Lire la critique {Review.ratingDecimal} étoiles de la saison {SeriesSeason.seasonNumber} de \"{SeriesSeason.label}\", par {Review.userNickName}.'
}
},
twitter : {
singular : {
Movie : 'Lire la critique {Review.ratingDecimal} étoiles de {Movie.label} {url}, par {Review.userNickName}.',
Series : 'Lire la critique {Review.ratingDecimal} étoiles de {Series.label} {url}, par {Review.userNickName}.',
SeriesSeason : 'Lire la critique {Review.ratingDecimal} étoiles de {SeriesSeason.label} - Saison {SeriesSeason.seasonNumber} {url}, par {Review.userNickName}.',
TvShowSeason : 'Lire la critique {Review.ratingDecimal} étoiles de {TvShowSeason.label} - Saison {TvShowSeason.seasonNumber} {url}, par {Review.userNickName}.',
TvShow : 'Lire la critique {Review.ratingDecimal} étoiles de {TvShow.label} {url}, par {Review.userNickName}.',
Program : 'Lire la critique {Review.ratingDecimal} étoiles de {Program.label} {url}, par {Review.userNickName}.',
ProgramSeason : 'Lire la critique {Review.ratingDecimal} étoiles de {ProgramSeason.label} - Saison {ProgramSeason.seasonNumber} {url}, par {Review.userNickName}.'
},
plural : {
Movie : 'Lire la critique {Review.ratingDecimal} étoiles de \"{Movie.label}\" {url}, par {Review.userNickName}.',
Series : 'Lire la critique {Review.ratingDecimal} étoiles de \"{Series.label}\" {url}, par {Review.userNickName}.',
SeriesSeason : 'Lire la critique {Review.ratingDecimal} étoiles de \"{SeriesSeason.label}\" Saison {SeriesSeason.seasonNumber} {url}, par {Review.userNickName}.',
TvShowSeason : 'Lire la critique {Review.ratingDecimal} étoiles de \"{TvShowSeason.label}\" Saison {TvShowSeason.seasonNumber} {url}, par {Review.userNickName}.',
TvShow : 'Lire la critique {Review.ratingDecimal} étoiles de \"{TvShow.label}\" {url}, par {Review.userNickName}.',
Program : 'Lire la critique {Review.ratingDecimal} étoiles de \"{Series.label}\" {url}, par {Review.userNickName}.',
ProgramSeason : 'Lire la critique {Review.ratingDecimal} étoiles de \"{SeriesSeason.label}\" Saison {SeriesSeason.seasonNumber} {url}, par {Review.userNickName}.'
}
}
}
}
},
followeesOpinion : {
note: 'pour <span data-prop="ratingCount" itemprop="ratingCount">1</span> note',
notes: 'pour <span data-prop="ratingCount" itemprop="ratingCount">{0:N0}</span> notes',
review: 'dont <span data-prop="reviewCount" itemprop="reviewCount">1</span> critique',
reviews: 'dont <span data-prop="reviewCount" itemprop="reviewCount">{0:N0}</span> critiques',
manyWantToSee: 'ont envie de voir',
oneWantToSee: 'a envie de voir',
},
actionBar : {
share : {
fan : {
facebook : {
Movie : 'Je suis fan du film {label}.',
Series : 'Je suis fan de la série {label}.',
SeriesSeason : 'Je suis fan de la saison {seasonNumber} de {label}.',
Person : 'Je suis fan de {label}',
TvShowSeason : 'Je suis fan de la saison {seasonNumber} de {label}.',
TvShow : 'Je suis fan du programme {label}.',
Program : 'Je suis fan du programme {label}.',
ProgramSeason : 'Je suis fan de la saison {seasonNumber} de {label}.'
},
twitter : {
Movie : 'Je suis fan de {label}',
Series : 'Je suis fan de {label}',
SeriesSeason : 'Je suis fan de {label} Saison {seasonNumber}.',
Person : 'Je suis fan de {label}',
TvShowSeason : 'Je suis fan de la saison {seasonNumber} de {label}.',
TvShow : 'Je suis fan du programme {label}.',
Program : 'Je suis fan de {label}',
ProgramSeason : 'Je suis fan de {label} Saison {seasonNumber}.'
}
},
rating : {
facebook : {
Movie : 'J\'ai noté {value} sur 5 le film {label}.',
Series : 'J\'ai noté {value} sur 5 la série {label}.',
SeriesSeason : 'J\'ai noté {value} sur 5 la saison {seasonNumber} de {label}.',
TvShowSeason : 'J\'ai noté {value} sur 5 la saison {seasonNumber} de {label}.',
TvShow : 'J\'ai noté {value} sur 5 l\'émission {label}.',
Program : 'J\'ai noté {value} sur 5 le programme {label}.',
ProgramSeason : 'J\'ai noté {value} sur 5 la saison {seasonNumber} de {label}.'
},
twitter : {
Movie : 'J\'ai noté {value} sur 5 {label}.',
Series : 'J\'ai noté {value} sur 5 {label}.',
SeriesSeason : 'J\'ai noté {value} sur 5 {label} Saison {seasonNumber}.',
TvShowSeason : 'J\'ai noté {value} sur 5 {label} Saison {seasonNumber}.',
TvShow : 'J\'ai noté {value} sur 5 {label}.',
Program : 'J\'ai noté {value} sur 5 {label}.',
ProgramSeason : 'J\'ai noté {value} sur 5 {label} Saison {seasonNumber}.'
}
},
review : {
facebook : {
Movie : 'J\'ai publié une critique {value} étoiles sur le film \"{label}\".',
Series : 'J\'ai publié une critique {value} étoiles sur la série \"{label}\".',
SeriesSeason : 'J\'ai publié une critique {value} étoiles sur la saison {seasonNumber} de \"{label}\".',
TvShowSeason : 'J\'ai publié une critique {value} étoiles sur la saison {seasonNumber} de \"{label}\".',
TvShow : 'J\'ai publié une critique {value} étoiles sur le programme \"{label}\".',
Program : 'J\'ai publié une critique {value} étoiles à propos du programme {label}.',
ProgramSeason : 'J\'ai publié une critique {value} étoiles sur la saison {seasonNumber} de \"{label}\".'
},
twitter : {
Movie : 'J\'ai publié une critique {value} étoiles sur \"{label}\".',
Series : 'J\'ai publié une critique {value} étoiles sur \"{label}\".',
SeriesSeason : 'J\'ai publié une critique {value} étoiles sur \"{label} - Saison {seasonNumber}\".',
TvShowSeason : 'J\'ai publié une critique {value} étoiles sur \"{label} - Saison {seasonNumber}\".',
TvShow : 'J\'ai publié une critique {value} étoiles sur \"{label}\".',
Program : 'J\'ai publié une critique {value} étoiles sur \"{label}\".',
ProgramSeason : 'J\'ai publié une critique {value} étoiles sur \"{label} - Saison {seasonNumber}\".'
}
},
wantToSee : {
facebook : {
Movie : 'J\'ai envie de voir le film {label}.',
Series : 'J\'ai envie de voir la série {label}.',
SeriesSeason : 'J\'ai envie de voir la saison {seasonNumber} de {label}.',
TvShowSeason : 'J\'ai envie de voir la saison {seasonNumber} de {label}.',
TvShow : 'J\'ai envie de voir le programme {label}.',
Program : 'J\'ai envie de voir le programme {label}.',
ProgramSeason : 'J\'ai envie de voir la saison {seasonNumber} de {label}.'
},
twitter : {
Movie : 'J\'ai envie de voir {label}.',
Series : 'J\'ai envie de voir {label}.',
SeriesSeason : 'J\'ai envie de voir {label} Saison {seasonNumber}.',
TvShowSeason : 'J\'ai envie de voir {label} Saison {seasonNumber}.',
TvShow : 'J\'ai envie de voir {label}.',
Program : 'J\'ai envie de voir {label}.',
ProgramSeason : 'J\'ai envie de voir {label} Saison {seasonNumber}.'
}
},
notInterested : {
facebook : {
Movie : 'Je n\'ai pas envie de voir le film {label}.',
Series : 'Je n\'ai pas envie de voir la série {label}.',
SeriesSeason : 'Je n\'ai pas envie de voir la saison {seasonNumber} de {label}.',
TvShowSeason : 'Je n\'ai pas envie de voir la saison {seasonNumber} de {label}.',
TvShow : 'Je n\'ai pas envie de voir l\'émission {label}.',
Program : 'Je n\'ai pas envie de voir le programme {label}.',
ProgramSeason : 'Je n\'ai pas envie de voir la saison {seasonNumber} de {label}.'
},
twitter : {
Movie : 'Je n\'ai pas envie de voir {label}.',
Series : 'Je n\'ai pas envie de voir {label}.',
SeriesSeason : 'Je n\'ai pas envie de voir {label} Saison {seasonNumber}.',
TvShowSeason : 'Je n\'ai pas envie de voir {label} Saison {seasonNumber}.',
TvShow : 'Je n\'ai pas envie de voir {label}.',
Program : 'Je n\'ai pas envie de voir {label}.',
ProgramSeason : 'Je n\'ai pas envie de voir {label} Saison {seasonNumber}.'
}
}
},
shareBtn : 'Partager cette action sur :' ,
close : 'Fermer',
Messages : {
facebookLike : {
Movie : {
soon : 'Vous aimez ce film, indiquez à vos amis que vous avez envie de le voir ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Se connecter avec Facebook</a>',
normal : 'Vous aimez ce film, partagez votre note avec vos amis et publiez votre critique ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Se connecter avec Facebook</a>'
},
Person : {
normal : 'Vous aimez cette star, indiquez à vos amis que vous êtes un fan ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Se connecter avec Facebook</a>'
},
Series : {
soon : 'Vous aimez cette série, indiquez à vos amis que vous avez envie de la voir ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Se connecter avec Facebook</a>',
normal : 'Vous aimez cette série, partagez votre note avec vos amis et publiez votre critique ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Se connecter avec Facebook</a>'
},
SeriesSeason : {
soon : 'Vous aimez cette saison, indiquez à vos amis que vous avez envie de la voir ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Se connecter avec Facebook</a>',
normal : 'Vous aimez cette saison, partagez votre note avec vos amis et publiez votre critique ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Se connecter avec Facebook</a>'
},
TvShow : {
soon : 'Vous aimez ce film, indiquez à vos amis que vous avez envie de le voir ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Se connecter avec Facebook</a>',
normal : 'Vous aimez ce film, partagez votre note avec vos amis et publiez votre critique ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Se connecter avec Facebook</a>'
},
TvShowSeason : {
soon : 'Vous aimez cette saison, indiquez à vos amis que vous avez envie de la voir ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Se connecter avec Facebook</a>',
normal : 'Vous aimez cette saison, partagez votre note avec vos amis et publiez votre critique ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Se connecter avec Facebook</a>'
},
Program : {
soon : 'Vous aimez ce programme ? Dites à vos amis que vous avez envie de le voir ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Connectez-vous à Facebook</a>',
normal : 'Vous aimez ce programme ? Partagez votre note avec vos amis et publié une critique. <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Connectez-vous à Facebook</a>'
},
ProgramSeason : {
soon : 'Vous aimez cette saison, indiquez à vos amis que vous avez envie de la voir ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Se connecter avec Facebook</a>',
normal : 'Vous aimez cette saison, partagez votre note avec vos amis et publiez votre critique ! <a href=\"#\" class=\"j_connect\" data-provider=\"FB\">Se connecter avec Facebook</a>'
}
},
fan : {
Movie : 'Vous êtes fan de ce film ? Partagez-le avec vos amis !',
Series : 'Vous êtes fan de cette série ? Partagez-le avec vos amis !',
Person : 'Vous êtes fan de cette star ? Partagez-le avec vos amis !',
SeriesSeason : 'Vous êtes fan de cette saison ? Partagez-le avec vos amis !',
TvShow : 'Vous êtes fan de cette émission ? Partagez-le avec vos amis !',
Program : 'Vous êtes fan de ce programme ? Partagez-le avec vos amis !',
ProgramSeason : 'Vous êtes fan de cette saison ? Partagez-le avec vos amis !'
},
rating : [
{
value : 3.5,
icon : 'icon-rating-bad',
text : 'Faites profiter les autres de votre expérience, <a href=\"{url}\">écrivez votre critique</a>'
},
{
value : 5,
icon : 'icon-rating-good',
text : 'Faites profiter les autres de votre expérience, <a href=\"{url}\">écrivez votre critique</a>'
}
],
wantToSee : {
Series : 'Retrouvez toutes les séries que vous avez envie de voir dans <a href=\"{url}\">Ma Collection</a>',
Movie : 'Retrouvez tous les films que vous avez envie de voir dans <a href=\"{url}\">Ma Collection</a>',
Person : 'Retrouvez toutes les stars que vous avez envie de voir dans <a href=\"{url}\">Ma Collection</a>',
SeriesSeason : 'Retrouvez toutes les saisons que vous avez envie de voir dans <a href=\"{url}\">Ma Collection</a>',
TvShowSeason : 'Retrouvez toutes les saisons que vous avez envie de voir dans Ma Collection',
TvShow : 'Retrouvez toutes les émissions que vous avez envie de voir dans Ma Collection'
},
followees : {
Movie : {
Connect : 'Que pensent vos amis de ce film ?',
None : 'Aucun de vos amis n\'a donné son avis sur {label}'
},
Person : {
Connect : 'Que pensent vos amis de cette star ?',
None : 'Aucun de vos amis n\'a donné son avis sur {label}'
},
Series : {
Connect : 'Que pensent vos amis de cette série ?',
None : 'Aucun de vos amis n\'a donné son avis sur {label}'
},
SeriesSeason : {
Connect : 'Que pensent vos amis de cette saison ?',
None : 'Aucun de vos amis n\'a donné son avis sur {label} saison {seasonNumber}'
},
TvShow : {
Connect : 'Que pensent vos amis de ce programme ?',
None : 'Aucun de vos amis n\'a donné son avis sur {label}'
},
TvShowSeason : {
Connect : 'Que pensent vos amis de cette saison ?',
None : 'Aucun de vos amis n\'a donné son avis sur {label} saison {seasonNumber}'
},
Empty : 'Retrouvez ici les notes et envies de voir de vos amis. Suivez de nouveaux membres en allant sur leur Profil et en cliquant sur \"Suivre son activité\"'
},
DiscoverBtn : 'Découvrez l\'avis de vos amis !'
}
},
ajaxGallery : {
photo : 'Photo',
sur : 'sur',
copyright : 'Copyright',
addedDate : 'Photo ajoutée le : ',
stars : 'Stars',
film : 'Film',
serie : 'Série',
description : 'Description',
season : 'Saison'
},
festivals : {
minimize: 'réduire',
maximize: 'plus'
},
videoClash : {
singular : '{count} vote',
plural : '{percent} - {count} votes'
},
autocomplete : {
searchFull : 'Tous les résultats pour \"$term\"',
metadata_movie_director: 'Film de $',
metadata_series_creator: 'Série par $',
sponsoLabel: 'Sponsorisé'
},
ad : {
trailerBooster : {
replay : 'Rejouer la vidéo'
},
html5Player : {
adCountDownPlural : 'Publicité ( $sec )',
adCountDownSingular : 'Publicité ( $sec )',
adSkipTTLSingular: 'Vous pourrez voir votre vidéo dans $ sec.',
adSkipTTLPlural: 'Vous pourrez voir votre vidéo dans $ secs.',
adSkippable: 'Voir votre vidéo maintenant',
nextvideopluraltxt: 'Dans {second} secondes, Allociné vous présentera: {nextvideotitle}',
nextvideosingulartxt: 'Dans {second} seconde, Allociné vous présentera: {nextvideotitle}',
topBannercontent: '{adsparam.refTitle} : Retrouvez toutes les info sur allocine',
adendinpluraltxt: 'Vous pouvez voir votre video dans {second} secondes',
adendinsingulartxt: 'Vous pouvez voir votre video dans {second} seconde',
adendskiptxt: 'Voir votre video maintenant',
adremainingTimetxt: 'Publicité ({second} sec)',
jwplayer:{
nextvideopluraltxt: 'Dans {second} secondes, Allociné vous présentera: <br /><strong>{title}</strong>',
nextvideosingulartxt: 'Dans {second} seconde, Allociné vous présentera: <br /><strong>{title}</strong>',
messageWithReleaseDate: '<strong>{title}</strong> (sortie cinéma le {day}/{month}/{year})',
shareheading: 'Partager la vidéo'
}
}
},
megatooltip : {
title: 'Nouveau sur Mon AlloCiné !',
discoverFriendsLike: 'Vos amis aiment-ils, détestent-ils, ou ont-ils envie de voir ce film ?',
discoverFriendsOpinions: 'Découvrez leur opinion sur toutes les pages AlloCiné !',
buttonLabel: 'Découvrez l\'avis de vos amis !'
},
emsNewletter :{
Added : 'Merci, votre email a bien été inscrit !',
Deleted : 'Votre email a bien été désinscrit.',
AlreadyAdd : 'Cet email est déjà bien inscrit !',
Error : 'Désolé, une erreure est survenue.',
WrongEmail : 'Merci de saisir une adresse email valide.'
},
cguModal :{
cguUpdated: 'Mise à jour des conditions générales d\'utilisation',
dearUsername: 'Chèr(e)',
informWeUpdated: 'Nous vous informons que nous venons d\'effectuer une mise à jour de nos',
CGU: 'Conditions générales d\'utilisation.',
beforeContinue: 'Avant de finaliser votre connexion au service Mon AlloCiné, pour des raisons légales, nous vous prions de bien vouloir prendre connaissance de ces nouvelles ',
termsOfUse: 'CGU',
here: 'ici',
andAcceptThem: ' et de les accepter : ',
readAndAgreed: 'J’ai lu et j\'accepte pleinement l\'ensemble des règles édictées par les Conditions Générales d’Utilisation. ',
generalConditions: ' ',
mandatory: '(obligatoire)',
accept: 'Accepter',
refuse: 'Refuser et me déconnecter',
}
};
window.ac = window.ac || {};
ac.global = ac.global || {};
ac.global.collapsibleblock = {
"readmore": "Lire la suite"
, "close": "Fermer"
};
ac.global.locale = AC.resources.locale;
window.locale = ac.global.locale;
---
title: Home
layout: blank.njk
lang: fr
image: "/includes/assets/images/JCP3.jpg"
description: "Le trait brut, presque agressif, et passionné de Annick Bergeon exhibe la détermination d'une Artiste au langage épistolaire, éminemment poétique."
---
<img class="background" style="object-position: center 70%;filter:blur(1px);" src="{{website.url}}/includes/assets/images/bg.jpg">
<div class="bio_border">
	<div class="bio_illustration">
		<img src="{{website.url}}/includes/assets/images/bg.jpg">
	</div>
	<div class="bio_content">
		<div class="lang_menu"> <span id="fr">FR</span> <span id="en">EN</span> <span id="es">ES</span> </div>
		<div class="bio_texts">
<div id="fr_text">

Le trait brut, presque agressif, et passionné d'Annick Bergeon cache sous une apparence presque enfantine la détermination d'une Artiste au langage épistolaire, éminemment poétique.  

Ces portraits impulsifs et tenaces vous apostrophent d'un regard cru et soutenu; reflétant tel un miroir brisé une émotion à vif, une légère folie d'un univers en décalage.  

Annick Bergeon est sensible au hasard et à la folie, parties essentielles de l'équilibre ordinaire.
Elle s'exprime et peint sans révérence aucune pour les normes, lois, perception ou acceptation par l’œil extérieur; elle peint en liberté&nbsp;!  
La résurgence de l'inconscient, l'automatisme dans son expression fondatrice la plus pure, nés d'une passion spontanée et complètement débridée sont alors retranscrites frénétiquement par d'innombrables voix, sur d'innombrables toiles, papiers et autres supports.  

Annick Bergeon est dans son élan créatif et sauvage; elle est sans retenue&nbsp;!!

</div>

<div id="en_text">

Annick Bergeon's raw, almost aggressive, and passionate stroke hides under an almost childlike appearance the determination of an Artist with an eminently poetic and epistolary language.  

These impulsive and tenacious portraits call out to you with a crude and sustained gaze; reflecting, like a broken mirror, a raw emotion, a slight madness of a off-beat universe.  

Annick Bergeon is sensitive to random fate and madness, essential parts of the everyday equilibrium.
She expresses herself and paints with no reverence for norms, laws, perception or acceptance by the outside eye; she paints freely!  
The resurgence of the unconscious, automatism in its purest founding expression, born of a spontaneous and completely unbridled passion are then frantically retranscribed by countless voices, on countless canvases, papers and other supports.  

Annick Bergeon is in her creative and wild impetus; unrestrained&nbsp;!
</div>

<div id="es_text">

La raya cruda, casi agresiva y apasionada de Annick Bergeon esconde bajo una apariencia casi infantil la determinación de un Artista con un lenguaje sumamente poético y epistolar.  

Estos retratos impulsivos y tenaces te apostrofan con una mirada bruta y sostenida; reflejando, como un espejo roto, una emoción cruda, una ligera locura de un universo desfasado.  

Annick Bergeon es sensible al azar y a la locura, partes esenciales del equilibrio ordinario.
Se expresa y pinta sin reverencia por las normas, leyes, percepción o aceptación del ojo externo; ¡pinta libremente!  
El resurgimiento del inconsciente, el automatismo en su más pura expresión fundadora, nacido de una pasión espontánea y completamente  
desenfrenada son entonces frenéticamente retranscritos por innumerables voces, en innumerables lienzos, papeles y otros soportes.  

Annick Bergeon está en su ímpetu creativo y salvaje; ¡&nbsp;sin restricciones&nbsp;! 
</div>
		</div>
	</div>
</div>
<div class="separator"></div>
<div class="separator"></div>

<script>
//identifying elements
const frButton = document.getElementById('fr');
const enButton = document.getElementById('en');
const esButton = document.getElementById('es');
const frText = document.getElementById('fr_text');
const enText = document.getElementById('en_text');
const esText = document.getElementById('es_text');

//onload
window.addEventListener("load", function(){
	enText.style.display = "none";
	esText.style.display = "none";
	frText.style.display = "inline";

	frText.classList.add("fade_in");
	frText.onanimationend = () => {
		frText.classList.remove("fade_in");
	};

	frButton.classList.add("highlight");
	enButton.classList.remove("highlight");
	esButton.classList.remove("highlight");
});

frButton.addEventListener("click", function(){
	enText.style.display = "none";
	esText.style.display = "none";
	frText.style.display = "inline";

	frText.classList.add("fade_in");
	frText.onanimationend = () => {
		frText.classList.remove("fade_in");
	};

	frButton.classList.add("highlight");
	enButton.classList.remove("highlight");
	esButton.classList.remove("highlight");
});
enButton.addEventListener("click", function(){
	frText.style.display = "none";
	esText.style.display = "none";
	enText.style.display = "inline";

	enText.classList.add("fade_in");
	enText.onanimationend = () => {
		enText.classList.remove("fade_in");
	};

	frButton.classList.remove("highlight");
	enButton.classList.add("highlight");
	esButton.classList.remove("highlight");
});
esButton.addEventListener("click", function(){
	enText.style.display = "none";
	frText.style.display = "none";
	esText.style.display = "inline";

	esText.classList.add("fade_in");
	esText.onanimationend = () => {
		esText.classList.remove("fade_in");
	};

	frButton.classList.remove("highlight");
	enButton.classList.remove("highlight");
	esButton.classList.add("highlight");
});
</script> 
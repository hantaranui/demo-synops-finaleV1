window.GUIDE_BLOCKS = [
  {
    "id": "block-1",
    "title": "Pourquoi votre solution mérite de passer en finale ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Parce qu’elle répond au cœur du sujet : l’interopérabilité ne se limite pas à faire circuler des données. Il faut rendre leur sens partageable. \nSynOps montre une approche concrète, progressive et maîtrisée pour utiliser l’IA générative là où elle apporte une vraie valeur : ambiguïtés, inconnus, contradictions et explications.",
    "keywords": []
  },
  {
    "id": "block-2",
    "title": "Quelle est la plus grande faiblesse de votre solution aujourd’hui ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "La plus grande limite est que nous avons un démonstrateur narratif, pas encore un prototype connecté à des flux réels. \nLa prochaine étape serait donc de tester la chaîne sur un petit jeu de données contrôlé, avec mesures de performance, taux d’erreur et retours d’analystes.",
    "keywords": []
  },
  {
    "id": "block-3",
    "title": "Si vous deviez abandonner une brique, laquelle ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "On pourrait remplacer Grist par un outil interne. \nEn revanche, on ne doit pas abandonner le référentiel validé ni la distinction entre cas connus et cas complexes. \nCe sont les éléments structurants de SynOps.",
    "keywords": []
  },
  {
    "id": "block-4",
    "title": "Qu’est-ce qui vous différencie vraiment ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Je dirais trois choses : \n- le traitement du problème comme un problème de sens, \n- l’usage ciblé du LLM sur les cas complexes, \n- et la capitalisation des validations dans un référentiel réutilisable.",
    "keywords": []
  },
  {
    "id": "block-5",
    "title": "Votre solution existe déjà, non ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Des briques existent : moteurs de règles, moteurs sémantiques, LLM, outils de validation. \nNotre proposition est de les organiser autour d’un cas précis : transformer des messages opérationnels hétérogènes en compréhension commune, avec raisonnement ciblé, validation humaine et mémoire réutilisable. \nL’innovation est dans l’assemblage orienté besoin, pas dans la prétention d’avoir inventé chaque brique.",
    "keywords": []
  },
  {
    "id": "block-6",
    "title": "Questions sur l’extensibilité",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "“Votre solution est-elle limitée au contexte militaire ?”\n\nRéponse :\nLe cas d’usage est militaire, mais la logique de médiation sémantique pourrait s’appliquer à d’autres environnements où plusieurs métiers utilisent des vocabulaires différents. \nCela dit, notre réponse est conçue pour le besoin MINARM : interopérabilité, souveraineté, traçabilité, décision humaine.\n\n“Comment l’étendre à d’autres armées, d’autres langues, d’autres standards ?”\n\nRéponse :\nEn ajoutant des référentiels, des ontologies et éventuellement des modèles adaptés. \nL’architecture est modulaire : les règles, embeddings, LLM et formats de sortie peuvent évoluer selon les sources et standards utilisés.",
    "keywords": []
  },
  {
    "id": "block-7",
    "title": "Questions sur l’adoption",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "“Pourquoi les analystes utiliseraient-ils votre outil ?”\n\nRéponse :\nParce qu’il ne leur demande pas de changer complètement leur métier. \nIl organise les propositions, garde les sources et réduit le tri répétitif. \nL’analyste garde son rôle d’arbitre. \nL’outil doit s’intégrer à ses pratiques, pas lui imposer une boîte noire.\n\n“Comment éviter que l’outil ajoute une couche de travail en plus ?”\n\nRéponse :\nC’est un risque. \nIl faut que SynOps automatise les cas connus et ne remonte que les cas utiles. \nSi l’analyste doit tout valider, l’outil échoue. L’objectif est de réduire les validations inutiles grâce au référentiel enrichi.",
    "keywords": []
  },
  {
    "id": "block-8",
    "title": "Questions sur la responsabilité",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "“Si SynOps se trompe, qui est responsable ?”\n\nRéponse :\nSynOps est un outil d’aide à l’orientation, pas un décideur. \nLa responsabilité opérationnelle reste humaine et institutionnelle. \nC’est pour cela que nous insistons sur la traçabilité : on doit savoir quelle proposition a été produite, à partir de quelles sources, avec quelle justification et quel statut.\n\n“Est-ce que l’analyste ne risque pas de trop faire confiance à l’IA ?”\n\nRéponse :\nC’est un vrai risque. C’est pourquoi l’interface doit montrer les incertitudes, les scores faibles, les contradictions et les sources. \nIl faut éviter une présentation trop affirmative. \nSynOps doit aider à questionner, pas donner une illusion de certitude.\n\nTrès bonne phrase :\nUne bonne interface ne doit pas rendre l’IA impressionnante ; elle doit rendre ses limites visibles.",
    "keywords": []
  },
  {
    "id": "block-9",
    "title": "Questions sur les données d’entrée",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "“Quels formats d’entrée acceptez-vous ?”\n\nRéponse :\nDans la logique cible : texte brut, JSON, XML ou messages structurés. \nL’important est de garder la source, l’horodatage, la zone, le type de message et les champs exploitables.\n\n“Que faites-vous si un message est incomplet ?”\n\nRéponse :\nIl peut quand même être ingéré, mais avec un niveau de confiance plus faible. \nSi l’information manquante est critique, le cas est signalé comme incomplet ou à compléter. \nSynOps ne doit pas inventer une donnée absente.\n\n“Que faites-vous si deux messages parlent de deux zones proches mais pas identiques ?”\n\nRéponse :\nIl faut une étape de normalisation géographique : coordonnées, zones, distances, horodatages. \nSi le rapprochement est incertain, on ne fusionne pas automatiquement. On signale une proximité possible avec un niveau de confiance.",
    "keywords": []
  },
  {
    "id": "block-10",
    "title": "Questions sur “l’apprentissage”",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "“Quand vous dites que SynOps apprend, est-ce que le modèle se réentraîne ?”\n\nRéponse :\nNon, pas dans notre démonstrateur. \nL’apprentissage est institutionnel, pas un entraînement automatique du modèle. \nCe qui s’enrichit, c’est le référentiel validé : les mappings confirmés sont réutilisés ensuite par les règles. \nLe modèle n’est pas modifié à chaque validation.\n\n- SynOps n’apprend pas en réentraînant le LLM ; il apprend en capitalisant les décisions validées.\n\n“Donc ce n’est pas vraiment de l’apprentissage automatique ?”\n\nRéponse :\nPas au sens d’un modèle qui se réentraîne en continu. \nC’est une mémoire métier structurée. \nC’est volontaire : dans un contexte sensible, on veut éviter qu’un modèle change de comportement sans contrôle.",
    "keywords": []
  },
  {
    "id": "block-11",
    "title": "Comment gérez-vous l’évolution du vocabulaire ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Le référentiel doit être vivant. \nUn terme peut évoluer, un mapping peut être désactivé, remplacé ou limité à un contexte. \nIl faut donc stocker non seulement le mapping, mais aussi son contexte d’usage, son statut et sa date de validation.",
    "keywords": []
  },
  {
    "id": "block-12",
    "title": "Comment éviter que deux analystes valident deux mappings contradictoires ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Il faut gérer les statuts, l’historique et les conflits. \nSi deux mappings entrent en contradiction, le système doit le signaler et demander arbitrage. \nC’est justement l’intérêt d’un référentiel tracé plutôt que de validations dispersées dans des fichiers isolés.",
    "keywords": []
  },
  {
    "id": "block-13",
    "title": "Comment éviter de noyer l’analyste sous les validations ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "En filtrant. \nLes cas à fort score et déjà validés peuvent passer automatiquement selon les règles décidées. \nLes cas ambigus, contradictoires ou à faible score remontent en priorité. \nLe but n’est pas de tout faire valider, mais de concentrer l’humain sur les cas à risque.",
    "keywords": []
  },
  {
    "id": "block-14",
    "title": "Votre approche marche avec 4 messages. Et avec 4 000 ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "l faudrait changer d’échelle technique, mais la logique reste valable. \nLes cas connus peuvent être traités automatiquement par règles et référentiel. \nLes embeddings peuvent être indexés. \nLe LLM doit rester réservé aux cas complexes. \nLe principal enjeu devient alors la priorisation : tous les messages ne doivent pas être envoyés au LLM ni à l’analyste.",
    "keywords": []
  },
  {
    "id": "block-15",
    "title": "Votre démo est statique : est-ce vraiment une preuve technique ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Notre démo n’est pas un POC industriel. \nElle sert juste à montrer le parcours utilisateur, le raisonnement et la valeur du cas d’usage. \nLes slides techniques montrent l’architecture cible. \nPour une phase suivante, il faudrait connecter les briques réelles, mesurer les performances et tester sur des jeux de données contrôlés.",
    "keywords": []
  },
  {
    "id": "block-16",
    "title": "Comment gérez-vous les contradictions entre deux sources fiables ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "SynOps ne tranche pas automatiquement. Il signale la contradiction, conserve les sources, abaisse le niveau de confiance et marque le cas comme nécessitant une décision humaine ou une information complémentaire.",
    "keywords": []
  },
  {
    "id": "block-17",
    "title": "Que se passe-t-il si SynOps donne un score élevé mais se trompe ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "C’est précisément pour cela que les propositions sensibles restent contrôlées. \nLe score ne suffit pas à valider. \nIl doit être accompagné d’une justification, d’une source, d’un statut et d’un contrôle humain si le cas est critique.",
    "keywords": []
  },
  {
    "id": "block-18",
    "title": "Comment on est arrivé à cette solution?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "On a commencé par relire le sujet comme un problème métier. \nLa question était : comment l’IA générative peut aider l’état-major à rendre ses données plus interopérables pour améliorer l’efficacité opérationnelle ?\nOn a donc commencé par définir les mots clés : interopérabilité, données hétérogènes, sémantique, référentiel, décision opérationnelle.\n\nEnsuite, on a fait une veille sur les notions d’interopérabilité, d’ontologies, de standards militaires, de MIM/STANAG, de LLM, de similarité sémantique et d’outils de validation.\n\nLa veille nous a permis d’écarter certaines fausses bonnes idées : un simple traducteur ou un dashboard ne répondaient pas assez au problème du sens entre sources.\n\nLe tournant de notre réflexion, c’est quand on a compris que l’interopérabilité ne se limite pas à connecter des systèmes ou convertir des formats. Deux systèmes peuvent techniquement échanger des données, mais ne pas leur donner le même sens.\n\nLe mot “engagement” par exemple, peut avoir plusieurs sens selon le contexte. \n“Technical” peut être absent d’un référentiel. “BRAVO SECURE” peut sembler rassurant isolément, mais devenir contradictoire si un drone signale une présence hostile dans la même zone.\n\nComme l’environnement MINARM est très large, on a choisi une approche ciblée : un scénario fictif inspiré de Serval, avec le Secteur B et quatre sources opérationnelles.\nCe choix nous permettait de montrer plusieurs difficultés en peu de temps : un cas connu, un faux ami, un terme inconnu, et une contradiction entre sources.\n\nCe point est très aligné avec la réunion : où vous nous avez expliqué qu’on pouvait choisir une approche “niche” très concrète ou une approche plus ouverte, à condition de bien l’assumer et de l’illustrer par un exemple maîtrisé.\n\nÀ partir de là, on a construit SynOps comme une chaîne progressive. Les cas simples ne doivent pas coûter cher ni dépendre d’un LLM : ils passent par les règles et le référentiel. \nLes concepts proches passent par la similarité sémantique. \nEt l’IA générative intervient seulement quand le contexte exige un raisonnement : ambiguïté, terme inconnu ou contradiction.\n\nPuis :\nOn a ajouté Grist pour matérialiser la validation et la mémoire, puis une sortie pivot inspirée MIM pour montrer comment les messages harmonisés peuvent devenir une synthèse exploitable par le poste de commandement.",
    "keywords": []
  },
  {
    "id": "block-19",
    "title": "Qui a accès au référentiel ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Ce point relève de la gouvernance. \nDans notre logique, l’accès doit être limité selon les rôles : lecture, validation, correction, administration. \nUn analyste ne doit pas forcément avoir les mêmes droits qu’un administrateur du référentiel.\n\nQuelle est la différence entre un analyste et un administrateur du référentiel?\nL’analyste utilise et enrichit le référentiel dans le cadre opérationnel.\nL’administrateur du référentiel organise, contrôle et sécurise le référentiel dans la durée.\n\n1. L’analyste opérationnel habilité\nC’est la personne qui travaille sur les messages et les propositions de SynOps.\nIl peut par exemple :\n- lire une proposition de mapping ;\n- vérifier si elle est cohérente avec le contexte terrain ;\n- confirmer, corriger ou rejeter une proposition ;\n- signaler un cas sensible ;\n- ajouter une justification métier.\n\nExemple : SynOps propose : TECHNICAL → VÉHICULE_LÉGER_ARMÉ\nL’analyste regarde le contexte, vérifie si c’est logique, puis confirme ou corrige.\nDonc l’analyste répond surtout à la question : “Est-ce que cette interprétation est correcte dans ce contexte opérationnel ?”\n\n2. L’administrateur du référentiel\nL’administrateur ne traite pas forcément les messages opérationnels un par un. \nSon rôle est plutôt de garantir que le référentiel reste propre, fiable et sécurisé.\n\nIl peut par exemple :\n- gérer les droits d’accès ;\n- décider qui peut valider ou modifier certains mappings ;\n- fusionner les doublons ;\n- retirer un mapping obsolète ;\n- surveiller les contradictions entre mappings ;\n- gérer les versions du référentiel ;\n- appliquer les règles de gouvernance.\n\nExemple :\nSi deux analystes ont validé deux mappings contradictoires, l’administrateur du référentiel peut ouvrir un arbitrage, corriger la base, archiver l’ancienne version ou limiter un mapping à un contexte précis.\nDonc l’administrateur répond surtout à la question : “Est-ce que le référentiel reste fiable, cohérent et bien gouverné dans le temps ?”",
    "keywords": []
  },
  {
    "id": "block-20",
    "title": "Comment éviter que le LLM expose des données sensibles ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "En environnement réel, les données ne doivent pas partir vers un service non maîtrisé. \nLe modèle doit être hébergé dans un environnement contrôlé, avec journalisation, filtrage des prompts, limitation des accès et données strictement nécessaires. \nLa démonstration est volontairement faite sur des données fictives.",
    "keywords": []
  },
  {
    "id": "block-21",
    "title": "Est-ce que les données opérationnelles partent vers un cloud externe ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Dans notre cible, non. \nNotre choix privilégie des briques maîtrisables : Mistral, CamemBERT local, Grist hébergeable, référentiel interne. \nPour le démonstrateur, on peut utiliser des données fictives et des outils accessibles, mais l’architecture cible doit rester déployable en environnement maîtrisé.",
    "keywords": []
  },
  {
    "id": "block-22",
    "title": "Qui décide qu’un mapping devient officiel ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Pas le LLM. \nDans notre logique, c’est un analyste opérationnel habilité, selon des règles de gouvernance à définir. \nPour les cas sensibles, on peut imaginer un niveau de validation supérieur ou une double validation.\n\nUne validation supérieure, c’est quand la proposition ne peut pas être validée seulement par l’analyste de premier niveau. Elle doit être remontée à une personne avec plus d’autorité ou plus d’expertise.\n\nPar exemple : L’analyste voit que BRAVO_SECURE contredit le drone.\nComme c’est une contradiction sensible, il ne valide pas seul.\nIl transmet à un niveau supérieur : chef de cellule, officier renseignement, responsable opérationnel, etc.\n\nDonc la logique est :\nCas normal → analyste opérationnel habilité\nCas sensible → validation par un niveau supérieur\n\nUne double validation, c’est quand deux personnes doivent confirmer avant que le mapping ou l’alerte soit considéré comme validé.\n\nPar exemple :\nAnalyste 01 valide que TECHNICAL peut être rapproché de VÉHICULE_LÉGER_ARMÉ.\nPuis Analyste 02 ou un superviseur vérifie et confirme.\nLe mapping n’entre dans le référentiel permanent qu’après ces deux accords.\n\nLa logique est :\n1ère validation : analyste qui traite le cas\n2e validation : autre analyste / superviseur / référent métier\n\nDifférence entre les deux\nValidation supérieure -> On remonte le cas à quelqu’un de plus haut placé ou plus habilité.\nDouble validation -> Deux personnes doivent confirmer le même cas avant validation finale.",
    "keywords": []
  },
  {
    "id": "block-23",
    "title": "Votre référentiel ne risque-t-il pas de devenir énorme et difficile à maintenir ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Oui, c’est un vrai sujet. \nC’est pour ça qu’il faut des statuts, des droits, des dates, des analystes responsables et une gouvernance du référentiel. \nTous les mappings ne doivent pas entrer automatiquement. \nSeuls les mappings confirmés et utiles doivent être capitalisés.",
    "keywords": []
  },
  {
    "id": "block-24",
    "title": "Pourquoi CamemBERT alors que votre scénario contient aussi de l’anglais ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "CamemBERT est pertinent pour les vocabulaires francophones et les concepts métier français. \nPour les termes anglais ou interalliés, on peut passer par un dictionnaire, un modèle multilingue ou directement par la passe 3 si le contexte exige une interprétation. \nCamemBERT n’est pas censé tout résoudre seul : il intervient dans une chaîne progressive.\n\nCamemBERT comprend-il vraiment le vocabulaire militaire ?\nPas complètement. C’est pour ça qu’on ne le présente pas comme un modèle spécialisé défense. \nIl sert à rapprocher des concepts proches. \nPour le vocabulaire militaire spécifique, il faut un référentiel métier validé, et pour les cas ambigus on passe au raisonnement LLM avec contexte et validation humaine.",
    "keywords": []
  },
  {
    "id": "block-25",
    "title": "Pourquoi ne pas faire uniquement des règles, sans LLM ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Les règles fonctionnent très bien pour les cas connus, mais elles atteignent vite leurs limites face aux faux amis, au jargon allié, aux termes absents du référentiel ou aux contradictions contextuelles. \nLe LLM permet d’expliquer une hypothèse quand le sens dépend du contexte.",
    "keywords": []
  },
  {
    "id": "block-26",
    "title": "Pourquoi ne pas faire uniquement du LLM, sans passes 1 et 2 ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Parce que ce serait moins maîtrisé, plus coûteux et plus difficile à auditer. \nLes cas connus doivent passer par des règles et un référentiel : c’est plus rapide, plus stable et plus traçable. \nLe LLM apporte surtout de la valeur sur les cas ambigus, inconnus ou contradictoires.\n- Phrase forte : Le LLM est utilisé comme une ressource de raisonnement, pas comme un réflexe automatique.\n\n1. “Moins maîtrisé”, ça veut dire quoi ?\n- Ça veut dire que si on envoie tout directement au LLM, on contrôle moins précisément ce qui se passe.\nAvec des règles ou un référentiel, le comportement est prévisible :\nSi le système voit HOSTILE_MOVEMENT, alors il le transforme en PRÉSENCE_HOSTILE.\nC’est clair, stable, vérifiable.\n- Avec un LLM, le raisonnement dépend davantage :\ndu prompt ; du contexte donné ; du modèle utilisé ; de la manière dont le message est formulé ; parfois de petites variations dans l’entrée.\nDonc deux messages très proches peuvent parfois produire des réponses légèrement différentes.\n- Phrase simple : Moins maîtrisé, ça veut dire que le résultat dépend davantage de l’interprétation du modèle, alors qu’une règle validée donne toujours le même résultat.\n- Exemple : Si HOSTILE_MOVEMENT est déjà connu dans le référentiel, il est inutile de demander au LLM de “réinterpréter” ce terme à chaque fois. On risque d’ajouter de l’incertitude là où on avait déjà une réponse fiable.\n\n\"Difficile à auditer”, ça veut dire quoi ?\n\nAuditer, ça veut dire pouvoir revenir après coup et comprendre :\n- Pourquoi le système a donné ce résultat ?\n- Quelle règle a été appliquée ?\n- Quelle source a été utilisée ?\n- Qui a validé ?\n- Est-ce reproductible ?\n\nAvec une règle, l’audit est simple :\nHOSTILE_MOVEMENT → règle n°12 → PRÉSENCE_HOSTILE → validée le 14/01 par Analyste 01.\nOn peut vérifier facilement.\n\nAvec un LLM, c’est plus difficile parce qu’il produit une réponse par raisonnement probabiliste. Même s’il donne une justification, on ne peut pas toujours expliquer exactement tout le chemin interne qui l’a amené à cette réponse.\n\nPhrase simple : Plus difficile à auditer, ça veut dire qu’il est plus compliqué de prouver précisément pourquoi le modèle a choisi cette interprétation, alors qu’une règle ou un mapping validé laisse une trace claire.",
    "keywords": []
  },
  {
    "id": "block-27",
    "title": "Est-ce que le LLM global ne risque pas de coûter cher si vous l’appelez dès le début ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Il est appelé une fois par lot de messages, pas une fois par champ. \nEt il ne traite pas tous les détails : il prépare un contexte global. \nEnsuite, le LLM local n’est appelé que sur les cas qui résistent aux règles et à la similarité. \nL’architecture cherche justement à limiter les appels inutiles au LLM.",
    "keywords": []
  },
  {
    "id": "block-28",
    "title": "Pourquoi avez-vous besoin d’un LLM global dès l’ingestion ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Parce que certaines informations n’ont du sens qu’en les comparant. \n- Par exemple le message SIGINT “BRAVO SECURE” peut sembler rassurant isolément, mais il devient problématique s’il contredit un drone qui signale une présence hostile dans la même zone. \n- Le LLM global sert à cette lecture croisée, pas à faire le mapping individuel.",
    "keywords": []
  },
  {
    "id": "block-29",
    "title": "Comment vous garantissez que le LLM ne fait pas d'hallucinations ?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "On ne prétend pas supprimer totalement le risque d’hallucination. En revanche, SynOps l’encadre fortement. \nLe LLM n’est pas utilisé seul car il reçoit un prompt structuré, des données sources, les résultats des passes précédentes, le contexte global et les définitions du référentiel. Il doit produire une réponse structurée avec un score et une justification. \nEnsuite, les cas sensibles passent par un analyste opérationnel habilité avant d’être capitalisés. \nDonc le LLM propose, mais il ne valide pas et il ne décide pas.\n\nou: On ne garantit pas que le LLM ne se trompe jamais ; on garantit qu’il ne peut pas transformer seul une erreur en décision opérationnelle.\nP\nourquoi?\nNotre maîtrise du risque repose sur:\n\n- L'usage ciblé du LLM : les cas connus passent d’abord par les règles, le référentiel et la similarité sémantique.\n- Le LLM ne répond pas librement ; il reçoit les sources, le contexte, les définitions et un format de réponse attendu.\n- On a une Sortie structurée : une réponse en JSON avec terme source, terme cible, score, justification et statut.\n- Puis il y a le Score de confiance : donc une proposition faible ne part pas directement en sortie opérationnelle.\n- Il y a aussi la Validation humaine : l’analyste opérationnel habilité garde le contrôle sur les cas sensibles.\n- Et la Traçabilité car chaque proposition garde sa source, sa justification, son statut, son analyste et sa date.\n- Et enfin une Capitalisation prudente car seuls les mappings confirmés entrent dans le référentiel.",
    "keywords": []
  },
  {
    "id": "block-30",
    "title": "Pourquoi Grist? Si on ne veut pas l'utiliser?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Nous avons choisi Grist pour le démonstrateur parce qu’il est simple, lisible, open source et hébergeable en environnement maîtrisé. Mais SynOps n’est pas dépendant de Grist.\n\nDans une architecture réelle, Grist peut être remplacé par une base déjà existante du Ministère, ou par un outil métier interne. Ce qui compte vraiment, ce sont les fonctions qu’il porte : conserver les correspondances validées, tracer les décisions, gérer les statuts, historiser les corrections et alimenter le référentiel SynOps.\n\nAutrement dit, Grist est notre support de démonstration. En production, SynOps pourrait se brancher sur l’existant via API ou connecteurs, sans imposer un nouvel outil aux équipes.\n\n“Et avec notre base existante, comment ça marche ?”\n\nSynOps aurait besoin d’une couche d’intégration. \nLes propositions produites par la chaîne SynOps seraient envoyées vers votre base via API. \nLa base stockerait les champs nécessaires : terme source, terme cible, type de lien, score, justification, statut, analyste, date et historique. \nEnsuite, les mappings validés seraient réinjectés dans le référentiel pour que les prochains traitements puissent les utiliser dès la passe 1.",
    "keywords": []
  },
  {
    "id": "block-31",
    "title": "Et si le LLM est indisponible? (pas disponible)",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Le système est pensé en mode dégradé.\nLes passes 1 et 2 ne dépendent pas du LLM : elles s’appuient sur les règles, le référentiel, les mappings déjà validés et la similarité sémantique locale.\nLes correspondances connues peuvent être chargées au démarrage en cache mémoire, donc elles restent exploitables même si le LLM est momentanément indisponible.\n\nCe qui est suspendu, c’est uniquement le raisonnement génératif sur les cas ambigus ou contradictoires. \nCes cas sont alors marqués comme non résolus ou à examiner.\n\nPhrase courte à retenir: \nLe mode dégradé ne bloque pas SynOps : il limite seulement le traitement des cas complexes. Les cas connus continuent, les cas incertains attendent.",
    "keywords": []
  },
  {
    "id": "block-32",
    "title": "Combien de temps prend le traitement?",
    "category": "Questions jury",
    "source": "Notes perso",
    "content": "Réponse simple:\nOn ne peut pas annoncer un temps exact sans benchmark réel. \nMais la logique est que la passe 1 est la plus rapide, \nla passe 2 est intermédiaire, \net la passe 3 est la plus variable car elle mobilise un LLM. \nC’est justement pour cela que SynOps utilise une chaîne progressive : les cas connus ne passent pas par le LLM, et seuls les cas complexes sont envoyés à Mistral. Le goulot d’étranglement reste surtout la validation humaine quand une décision sensible doit être prise.\n\nou: \nNous n’avons pas réalisé de benchmark de performance, donc nous ne donnons pas de temps exact. En revanche, l’architecture est conçue pour limiter le coût et la latence : les cas connus passent par les règles et le référentiel, les concepts proches par la similarité sémantique, et le LLM n’est mobilisé que pour les cas qui demandent un raisonnement. Le traitement automatique est donc progressif, et le temps critique reste surtout celui de la validation humaine lorsque le système détecte une contradiction ou un cas sensible.\n\nRéponse plus détaillée:\nÀ ce stade, nous ne donnons pas de chronométrage exact, parce que le démonstrateur n’est pas un benchmark de performance. Mais l’architecture est pensée pour que les traitements simples soient rapides : la passe 1 repose sur des règles et un référentiel, donc elle est quasi immédiate ; la passe 2 avec CamemBERT est plus coûteuse mais reste automatisable localement ; la passe 3, avec Mistral, est la plus variable, car elle dépend du modèle, de l’infrastructure et de la longueur du contexte.\n\nLe point important, c’est que le LLM n’est pas appelé partout : il est réservé aux cas ambigus, inconnus ou contradictoires. Dans beaucoup de cas, le vrai temps incompressible n’est pas le calcul automatique, mais la validation humaine sur les situations sensibles.",
    "keywords": []
  },
  {
    "id": "block-33",
    "title": "La sortie PIVOT inspirée MIM",
    "category": "Technique",
    "source": "Notes perso",
    "content": "Question probable : \"Comment la sortie MIM est-elle générée ? Est-ce vraiment le MIM ?\"\n\nPrécision importante : ce n'est pas une implémentation complète et certifiée du MIM. C'est une sortie structurée inspirée du MIM — c'est ce qu'on annonce dans la démo et les slides.\n\nConcrètement, une fois les validations faites, un module de traduction lit les mappings validés dans Grist, les applique aux messages originaux, et structure le résultat en JSON-LD avec les types de concepts inspirés du MIM :\njson{\n  \"eventType\": \"PRÉSENCE_HOSTILE\",\n  \"location\": {\"sector\": \"Secteur B\", \"confidence\": 0.78},\n  \"sources\": [\"DRONE_ISR_7\", \"SGTIA_MARKALA\"],\n  \"status\": \"validated\",\n  \"validatedBy\": \"Analyste 01\",\n  \"timestamp\": \"14/01/2026T14:33:00Z\",\n  \"alerts\": [\"CONTRADICTION_SIGINT_PENDING\"]\n}\nCette sortie est exportable, réutilisable, et lisible par n'importe quel système capable de lire du JSON standard. Elle respecte l'esprit du MIM sans prétendre être une implémentation certifiée OTAN.\n\nJSON-LD, ça veut dire JavaScript Object Notation for Linked Data.\n\nDit simplement : \"JSON-LD est une façon d’écrire des données structurées en JSON, mais avec du sens explicite.\"\n\n1. JSON simple\n\nUn JSON classique, c’est juste une structure lisible par une machine :\n\n{\n  \"type\": \"PRESENCE_HOSTILE\",\n  \"secteur\": \"Secteur B\",\n  \"confiance\": 0.78\n}\nLa machine voit des champs, mais elle ne sait pas forcément ce que veut dire exactement type, secteur ou confiance.\n\nJSON-LD ajoute un contexte qui explique le sens des champs.\n\n{\n  \"@context\": {\n    \"type\": \"https://synops.example/ontology/type\",\n    \"secteur\": \"https://synops.example/ontology/secteur\",\n    \"confiance\": \"https://synops.example/ontology/confiance\"\n  },\n  \"@type\": \"Observation\",\n  \"type\": \"PRESENCE_HOSTILE\",\n  \"secteur\": \"Secteur B\",\n  \"confiance\": 0.78\n}\n\nLe @context sert à dire :\n\nQuand j’écris “confiance”, je parle bien du score de confiance défini dans tel référentiel.\nQuand j’écris “secteur”, je parle bien d’une zone opérationnelle.\nQuand j’écris “type”, je parle bien d’un type d’événement opérationnel.\n\nDonc JSON-LD aide les systèmes à comprendre le sens des données, pas seulement leur forme.\n\nPourquoi c’est intéressant pour SynOps ?\n\nPour SynOps, JSON-LD pourrait servir à rendre la sortie pivot encore plus interopérable.\n\nAu lieu d’envoyer seulement :\n\n{\n  \"type\": \"DEMANDE_TIR_APPUI\",\n  \"score\": 0.91\n}\n\non peut envoyer une donnée qui dit aussi :\n\nCe concept appartient à tel référentiel.\nIl correspond à telle définition.\nIl peut être relié à d’autres vocabulaires ou ontologies.\n\nPhrase simple à retenir\n\n\"JSON, c’est une donnée structurée. JSON-LD, c’est une donnée structurée avec son sens attaché.\"\n\nPour notre projet, on peut dire :\n\nLa sortie pivot SynOps pourrait être exportée en JSON classique pour la démonstration, puis évoluer vers du JSON-LD pour mieux relier les concepts à une ontologie commune et faciliter l’interopérabilité sémantique.",
    "keywords": []
  },
  {
    "id": "block-34",
    "title": "Le flux vers GRIST",
    "category": "Technique",
    "source": "Notes perso",
    "content": "Question probable : \"Comment les résultats du pipeline arrivent dans Grist ?\"\n\nGrist expose une API REST standard. Chaque proposition d'alignement produite par le pipeline est envoyée via un appel POST :\nPOST /api/docs/{docId}/tables/mappings/records\n{\n  \"terme_source\": \"TECHNICAL\",\n  \"terme_cible\": \"VÉHICULE_LÉGER_ARMÉ\",\n  \"justification\": \"TECHNICAL désigne...\",\n  \"score\": 0.74,\n  \"statut\": \"En attente\",\n  \"date\": \"14/01/2026\"\n}\nL'analyste ouvre Grist, et voit les enregistrements \"En attente\" dans son tableau de bord. Il valide, corrige ou rejette. Le statut est mis à jour dans Grist en temps réel.\nLe pipeline consulte Grist régulièrement via un appel GET pour récupérer les mappings nouvellement validés et mettre à jour son cache mémoire.",
    "keywords": []
  },
  {
    "id": "block-35",
    "title": "Comment fonctionne LLM - Passe 3",
    "category": "Technique",
    "source": "Notes perso",
    "content": "Question probable : \"Qu'est-ce que vous envoyez exactement au LLM ? Comment il sait quoi répondre ?\"\n\nOn envoie un prompt structuré qui contient :\nLe message brut original avec son contexte complet. Le résultat des passes 1 et 2 — ce qu'elles ont trouvé et pourquoi elles n'ont pas pu trancher. Les définitions des ontologies source et cible pour les termes concernés. Et une instruction précise : \"Propose un alignement entre ces deux concepts, donne un score de confiance entre 0 et 1, et explique ton raisonnement en français militaire accessible.\"\n\nLe LLM répond en JSON structuré :\njson{\n  \"terme_source\": \"ENGAGEMENT_APPUI_FEU\",\n  \"terme_cible\": \"DEMANDE_TIR_APPUI\",\n  \"score_confiance\": 0.91,\n  \"justification\": \"Le terme ENGAGEMENT est associé à APPUI_FEU...\"\n}\nCe JSON est parsé automatiquement et envoyé dans Grist. Si le LLM répond de façon malformée, le message est mis en attente avec un score de 0 et signalé à l'analyste.\n\nQuestion probable : \"Et si le LLM se trompe ?\"\n\nC'est exactement pour ça que l'analyste valide chaque proposition. Le LLM ne décide jamais seul. Sa proposition entre dans le référentiel seulment après une validation humaine explicite. Et si l'analyste corrige, cette correction nourrit le dictionnaire de la passe 1 pour la prochaine fois — le système apprend de ses erreurs.",
    "keywords": []
  },
  {
    "id": "block-36",
    "title": "ALIGNEMENT Sémantique - Passe 2 - Pas d'IA",
    "category": "Technique",
    "source": "Notes perso",
    "content": "Question probable : \"CamemBERT, c'est quoi exactement et pourquoi ce choix ?\"\n\nCamemBERT est un modèle de langue français développé par Inria et Facebook AI Research, disponible en open source sur HuggingFace. \nC'est l'équivalent français de BERT — entraîné sur des textes français, donc bien calibré pour notre vocabulaire.\n\nOn l'utilise via la bibliothèque sentence-transformers pour transformer chaque concept en un vecteur de 768 nombres — une représentation mathématique du sens. Deux concepts proches sémantiquement auront des vecteurs proches dans cet espace.\n\nOn mesure ensuite la similarité cosinus entre vecteurs. ÉVACUATION SANITAIRE et MEDEVAC NAVAL n'ont aucun mot en commun — mais leurs vecteurs sont très proches parce qu'ils décrivent la même réalité.\n\nConversion de coordonnées — la passe 2 gère aussi la conversion WGS84 décimal vers MGRS et inversement, via la bibliothèque Python mgrs. C'est du calcul mathématique pur, pas de l'IA.\n\nPourquoi CamemBERT et pas un LLM directement ? Parce que CamemBERT est 100 fois plus rapide et hébergeable on-premise sans aucun appel externe. Il traite les cas de similarité sémantique évidente sans dépendre d'une API. Le LLM est réservé aux cas que CamemBERT ne peut pas trancher.",
    "keywords": []
  },
  {
    "id": "block-37",
    "title": "NORMALISATION (Pas d'IA) - Passe 1",
    "category": "Technique",
    "source": "Notes perso",
    "content": "Question probable : \"Vous dites 'sans IA', mais comment ça fonctionne exactement ?\"\n\nTrois techniques combinées, toutes déterministes et auditables.\n\nNettoyage textuel — suppression des underscores, normalisation des accents, mise en minuscules, suppression du bruit. KPH devient km/h, NW devient Nord-Ouest. En Python avec des expressions régulières et un dictionnaire de règles.\n\nDistance de Levenshtein — mesure combien de caractères il faut modifier pour passer d'un mot à un autre. HOSTILE_MOUVEMENT vs HOSTILE_MOVEMENT : 1 caractère de différence, score très proche. Bibliothèque Python python-Levenshtein, 3 lignes de code.\n\nDictionnaire de correspondances — une table maintenue dans Grist par les analystes opérationnels. APPUI_FEU = SOUTIEN_PAR_LE_FEU = CAS. Quand la passe 1 trouve un terme dans ce dictionnaire, elle propose l'alignement directement. Ce dictionnaire s'enrichit automatiquement à chaque validation d'un analyste.\n\nDétection des faux amis — une liste de termes signalés manuellement comme ambigus. ENGAGEMENT est dans cette liste : dès qu'il apparaît, il est systématiquement envoyé en passe 3 pour raisonnement contextuel, jamais aligné automatiquement.",
    "keywords": []
  },
  {
    "id": "block-38",
    "title": "INGESTION",
    "category": "Technique",
    "source": "Notes perso",
    "content": "Question probable : \"Concrètement, comment les messages entrent dans le système ?\"\nLes messages arrivent dans des formats hétérogènes — XML militaire, JSON, texte structuré, transcription radio. Le module d'ingestion utilise des parsers Python standards (xml.etree, json) pour lire chaque format et les convertit vers une structure JSON commune avant tout traitement. Chaque message reçoit un identifiant unique, un horodatage, et une source identifiée.\nDans un déploiement production à volume élevé, un bus de messages comme Apache Kafka permettrait de gérer des milliers de messages simultanés. (Pour le prototype hackathon, un script Python avec une API REST simple suffit à démontrer le principe.)",
    "keywords": []
  },
  {
    "id": "block-39",
    "title": "Sortie PIVOT",
    "category": "Définition",
    "source": "Notes perso",
    "content": "Une sortie pivot, c’est un format commun de sortie qui sert de point de traduction entre plusieurs systèmes, plusieurs vocabulaires ou plusieurs sources.\n\nDans SynOps, au départ, on reçoit des messages différents :\n\nDrone ISR : HOSTILE_MOVEMENT\nUnité Terre : ENGAGEMENT_APPUI_FEU\nForces alliées : TECHNICAL\nSIGINT : BRAVO SECURE\n\nChaque source parle avec ses propres mots. La sortie pivot, c’est le moment où SynOps transforme tout ça en une forme commune, structurée et compréhensible par le poste de commandement.\n\nPar exemple :\n\nHOSTILE_MOVEMENT devient PRÉSENCE_HOSTILE\nENGAGEMENT_APPUI_FEU devient DEMANDE_TIR_APPUI\nTECHNICAL devient VÉHICULE_LÉGER_ARMÉ\nBRAVO SECURE devient ALERTE_CONTRADICTION\n\nDonc au lieu d’avoir quatre messages séparés, on obtient une image de situation commune.\n\nPhrase simple à dire à l’oral :\n\nC’est comme une langue commune de sortie : chaque message garde sa source, mais il est reformulé dans un format standard pour être compris par tous les systèmes.\n\nDans notre cas, il faut bien préciser :\n\nNotre sortie pivot est inspirée du MIM et du cadre STANAG, mais nous ne prétendons pas avoir développé une implémentation certifiée MIM.\n\nDonc la définition complète pour votre projet :\n\nLa sortie pivot SynOps est une représentation commune et structurée de la situation opérationnelle. Elle rassemble les informations harmonisées, les scores de confiance, les validations humaines et les alertes de contradiction dans un format exploitable par le poste de commandement.",
    "keywords": []
  },
  {
    "id": "block-40",
    "title": "Deux au Carré · Women in Gen AI 2026 · Ministère des Armées",
    "category": "Guide",
    "source": "Guide SynOps",
    "content": "Pourquoi ce guide ? Pour comprendre SynOps de A à Z, pas juste les slides, mais le vrai raisonnement derrière. Ce qui se passe sous le capot, pourquoi on a fait ces choix, et comment répondre à n'importe quelle question du jury.",
    "keywords": []
  },
  {
    "id": "block-41",
    "title": "D'où vient l'idée ? Le défi de départ",
    "category": "Contexte",
    "source": "Guide SynOps",
    "content": "Le hackathon Women in Gen AI 2026, organisé par EY et Microsoft, nous a proposé un cas d'usage du Ministère des Armées. La question posée était simple en apparence, mais redoutablement complexe en pratique :\n\"Comment l'IA générative peut-elle aider l'état-major à rendre ses données plus interopérables pour augmenter l'efficience des opérations militaires ?\"\nPremière réaction : c'est quoi l'interopérabilité ? En gros, c'est la capacité de systèmes différents à se parler et à se comprendre. Le problème dans l'armée, c'est que chaque branche (Terre, Marine, Air, Renseignement) a développé ses propres outils, ses propres vocabulaires, ses propres formats de données. Résultat : quand plusieurs armées opèrent ensemble, elles ne parlent pas tout à fait la même langue. Ce n'est pas de la mauvaise volonté, c'est structurel.\nOn aurait pu répondre avec une solution de synchronisation de bases de données ou un outil de traduction automatique. Mais on a posé une question plus précise : le problème réel, c'est quoi ? Ce n'est pas que les données ne circulent pas. Elles circulent. C'est que leur sens se perd en chemin.\nC'est de là qu'est né SynOps.",
    "keywords": []
  },
  {
    "id": "block-42",
    "title": "Pourquoi l'opération Serval ?",
    "category": "Contexte",
    "source": "Guide SynOps",
    "content": "L'opération Serval, c'est l'intervention militaire française au Mali en janvier 2013. Elle est publiquement documentée, non classifiée dans ses grandes lignes, et elle illustre parfaitement le problème qu'on veut résoudre.\nPourquoi Serval spécifiquement ?\nParce que c'est une opération interarmées réelle. Terre, Air, Marine, Renseignement, forces alliées africaines, tout le monde était là. Chaque armée avec ses propres codes.\nParce qu'elle s'est déroulée dans un contexte d'urgence temporelle. Les décisions se prenaient vite, avec des informations qui arrivaient de partout, parfois contradictoires.\nParce qu'elle est dans les mémoires. Quand on dit \"Mali, 2013, opération Serval\" devant un jury du Ministère des Armées, les gens connaissent. On ne raconte pas une fiction, on s'ancre dans quelque chose de réel.\nNos données restent fictives et non sensibles: c'est précisé partout dans la démo. On s'inspire du contexte, pas des faits réels.",
    "keywords": []
  },
  {
    "id": "block-43",
    "title": "Le Secteur B : pourquoi ce nom ?",
    "category": "Contexte",
    "source": "Guide SynOps",
    "content": "Le Secteur B, c'est une zone géographique fictive qu'on a placée sur une carte. Le Secteur B est une zone d'opération au centre de cette carte.\nPourquoi \"B\" et pas un nom de ville réelle ? Parce que dans le jargon militaire, les zones sont désignées par des lettres ou des codes neutres. C'est leur langage. En disant \"Secteur B\", on parle comme eux. Et ça évite de coller un nom de lieu réel à des événements fictifs.\nLe Secteur B est le centre de gravité de notre scénario. C'est là que les quatre sources rapportent simultanément, chacune avec sa propre lecture de la situation.",
    "keywords": []
  },
  {
    "id": "block-44",
    "title": "Pourquoi \"SynOps\" ?",
    "category": "Contexte",
    "source": "Guide SynOps",
    "content": "Section: SynOps : le nom, l'idée, le sens\n\nSynOps est la contraction de deux mots français :\nSynchronisation : mettre en phase des éléments qui ne le sont pas\nOpérations : le contexte militaire et décisionnel dans lequel ça s'applique\nCe n'est pas un acronyme anglais. C'est un mot français, défendable devant un jury du Ministère des Armées, qui dit exactement ce que ça fait : synchroniser le sens des données opérationnelles.",
    "keywords": []
  },
  {
    "id": "block-45",
    "title": "L'idée centrale",
    "category": "Contexte",
    "source": "Guide SynOps",
    "content": "Section: SynOps : le nom, l'idée, le sens\n\nSynOps n'est pas un traducteur. Ce n'est pas non plus une base de données intelligente. C'est quelque chose de plus précis : un pont de sens.\nImaginez quatre personnes dans une pièce qui parlent de la même chose, mais avec des mots différents, des formats différents, des références différentes. L'une dit \"je vois un danger\", l'autre dit \"situation instable\", la troisième dit \"threat level orange\", la quatrième garde le silence parce qu'elle n'a pas les mots pour dire ce qu'elle a vu.\nSynOps est la personne dans la pièce qui comprend tout le monde, qui recompose une image commune, et qui explique à chacun ce que l'autre a voulu dire. Sans décider à la place de personne.",
    "keywords": []
  },
  {
    "id": "block-46",
    "title": "Le pipeline en 8 étapes : de la donnée brute à la décision éclairée",
    "category": "Pipeline",
    "source": "Guide SynOps",
    "content": "Voici comment SynOps fonctionne concrètement, étape par étape. Pensez à une chaîne de montage, mais pour le sens des mots.\n┌─────────────────────────────────────────────────────────────────────┐\n│ │\n│ MESSAGE BRUT SORTIE │\n│ DRONE ISR ──┐ ┌────── │\n│ UNITÉ TERRE ──┤ [1] [2] [3] [4] [5] [6] [7] ──┤ │\n│ FORCES ALI. ──┤ REC LIT NOR ALI EXP CTR CAP ──┤ PIVOT │\n│ SIGINT ──┘ [8]RST └────── │\n│ │\n└─────────────────────────────────────────────────────────────────────┘",
    "keywords": []
  },
  {
    "id": "block-47",
    "title": "Étape 1 — RECEVOIR",
    "category": "Pipeline",
    "source": "Guide SynOps",
    "content": "Section: Le pipeline en 8 étapes : de la donnée brute à la décision éclairée\n\nLes messages arrivent. Pas forcément tous en même temps, pas dans le même format, pas avec les mêmes conventions.\nLe Drone ISR envoie quelque chose qui ressemble à ça :\nSOURCE: DRONE_ISR_7 | CONTACT_TYPE: HOSTILE_MOVEMENT\nCOORD: 14°09'N 005°46'W (WGS84) | EFFECTIF: 3 VEH + 12 PAX\nHEADING: NW | SPEED: 35 KPH\nL'Unité Terre envoie :\nSOURCE: SGTIA_MARKALA\nDEMANDE: ENGAGEMENT_APPUI_FEU immédiat\nDÉLAI: URGENT\nLes Forces alliées tchadiennes envoient :\nSIGNAL: TECHNICAL en approche\nSTATUS: FATIGUE_COMBAT\nLe SIGINT (interception radio) capte :\nCONTENU: \"BRAVO SECURE — REPLI ZONE NORD\"\nCONFIDENCE: 0.35\nCes messages arrivent sous forme de texte structuré, souvent du JSON, du XML, ou du texte brut selon la source. Le module d'ingestion de SynOps les lit tous, les enveloppe dans un format interne commun, et les estampille avec leur source, leur horodatage, et leur zone d'origine.\nLa question à ce stade n'est pas encore de comprendre. C'est juste de tout recevoir.",
    "keywords": []
  },
  {
    "id": "block-48",
    "title": "Étape 2 — LIRE ENSEMBLE (La vision croisée)",
    "category": "Pipeline",
    "source": "Guide SynOps",
    "content": "Section: Le pipeline en 8 étapes : de la donnée brute à la décision éclairée\n\nC'est ici qu'intervient le premier niveau du LLM, et c'est important de bien le comprendre.\nAvant même de traiter chaque message individuellement, SynOps les regarde tous ensemble. Comme un officier de renseignement qui reçoit quatre rapports différents sur la même zone et qui les lit côte à côte avant de plonger dans les détails.\n┌──────────────┐ ┌──────────────┐\n│ Drone ISR │ │ Unité Terre │\n│ HOSTILE_MOV │ │ ENGAGEMENT │\n└──────┬───────┘ └──────┬───────┘\n│ │\n└──────┬────────────┘\n│\n┌────▼────┐\n│ LLM │ ← Lecture croisée globale\n│ GLOBAL │ \"Ces 4 sources parlent du\n└────┬────┘ même secteur. Drone et Terre\n│ sont cohérents. SIGINT\n┌──────┴────────────┐ contredit le Drone.\"\n│ │\n┌──────▼───────┐ ┌──────▼───────┐\n│ Forces ali. │ │ SIGINT │\n│ TECHNICAL │ │ BRAVO SECURE │\n└──────────────┘ └──────────────┘\nCe que fait le LLM global à cette étape :\nIl détecte les cohérences (Drone et Terre parlent du même contact dans la même zone)\nIl repère les tensions (SIGINT dit \"zone sécurisée\" alors que Drone dit \"contact hostile actif\")\nIl prépare un contexte global qui sera transmis à chaque passe suivante\nC'est pour ça que sur notre démo, le Drone ISR est marqué \"normalisé et transmis au contexte global\": même s'il n'a pas besoin du LLM pour être aligné, son contenu sert de référence pour analyser les autres.",
    "keywords": []
  },
  {
    "id": "block-49",
    "title": "Étape 3 — NORMALISER (Passe 1 : règles et référentiels)",
    "category": "Pipeline",
    "source": "Guide SynOps",
    "content": "Section: Le pipeline en 8 étapes : de la donnée brute à la décision éclairée\n\nOn passe maintenant à chaque message individuellement.\nLa normalisation, c'est le travail de base. Pas d'IA ici, juste des règles claires et un dictionnaire de correspondances.\nCe qu'on fait concrètement :\nAVANT normalisation APRÈS normalisation\n───────────────────── ───────────────────────────\nKPH: 35 ──────► vitesse: 35 km/h\nHEADING: NW ──────► cap: Nord-Ouest\n14°09'N 005°46'W ──────► coordonnées format pivot\nHOSTILE_MOVEMENT ──────► PRÉSENCE_HOSTILE (si dans le dico)\nLes outils utilisés :\nPython avec expressions régulières pour détecter les patterns connus\nDistance de Levenshtein : un algorithme qui mesure à combien de lettres près un terme se rapproche d'un autre. HOSTILE_MOUVEMENT vs HOSTILE_MOVEMENT : 1 lettre de différence. C'est le même concept. L'algorithme le détecte.\nDictionnaire de règles dans Grist : une table maintenue par les analystes opérationnels où sont stockées les correspondances validées. Chaque terme source et son équivalent cible.\nSi la passe 1 trouve une correspondance avec suffisamment de confiance, le message est aligné et transmis directement à l'étape suivante. Aucun LLM sollicité. C'est rapide.\nSi le terme est dans une liste de \"faux amis\" connus (comme ENGAGEMENT), il est automatiquement envoyé en passe 3 sans même tenter l'alignement. On ne joue pas avec les ambiguïtés critiques.",
    "keywords": []
  },
  {
    "id": "block-50",
    "title": "Étape 4 — ALIGNER (Passe 2 : similarité sémantique avec CamemBERT)",
    "category": "Pipeline",
    "source": "Guide SynOps",
    "content": "Section: Le pipeline en 8 étapes : de la donnée brute à la décision éclairée\n\nLes cas que la passe 1 n'a pas résolus arrivent ici. Soit parce qu'ils ne sont pas dans le dictionnaire, soit parce qu'ils sont trop éloignés des termes connus.\nC'est quoi CamemBERT ?\nCamemBERT, c'est un modèle de langue français, développé par Inria et Facebook AI Research, disponible gratuitement en open source. C'est l'équivalent français de BERT : le modèle de référence en traitement du langage naturel. Il a été entraîné sur des milliards de mots français, donc il connaît bien les nuances de notre langue.\nComment on l'utilise ? On lui demande de transformer chaque terme en un vecteur : un ensemble de nombres qui représente le sens du mot dans un espace mathématique.\nÉVACUATION SANITAIRE → [0.82, 0.14, 0.67, 0.31, ...] (768 nombres)\nMEDEVAC NAVAL → [0.79, 0.18, 0.63, 0.29, ...] (768 nombres)\n└──── très proches l'un de l'autre ────┘\n→ similarité cosinus élevée → même concept\nDeux termes qui ont le même sens auront des vecteurs proches, même s'ils n'ont aucun mot en commun. C'est ce qui distingue une approche par mots-clés d'une vraie compréhension sémantique.\nUn score de similarité est calculé entre 0 et 1. Si ce score dépasse un seuil de confiance défini, on propose l'alignement. S'il reste trop incertain, on monte en passe 3.\nCamemBERT tourne entièrement en local : aucun appel externe, aucune donnée qui part vers un cloud étranger. C'est souverain par conception.",
    "keywords": []
  },
  {
    "id": "block-51",
    "title": "Étape 5 — EXPLIQUER (Passe 3 : raisonnement génératif avec Mistral)",
    "category": "Pipeline",
    "source": "Guide SynOps",
    "content": "Section: Le pipeline en 8 étapes : de la donnée brute à la décision éclairée\n\nOn arrive à l'étape la plus puissante et la plus ciblée. Le LLM n'intervient ici que pour les cas que les deux passes précédentes n'ont pas pu résoudre : les ambiguïtés, les termes inconnus, les contradictions.\nComment ça fonctionne ?\nOn envoie à Mistral un prompt structuré, une instruction détaillée qui contient :\n1. Le message brut original\n2. Le résultat des passes 1 et 2 (ce qu'elles ont trouvé ou pas)\n3. Le contexte global des autres sources (préparé à l'étape 2)\n4. Les définitions des ontologies concernées\n5. Une instruction : \"Propose un alignement, donne un score de confiance\nentre 0 et 1, explique ton raisonnement en français militaire clair.\nRéponds en JSON.\"\nMistral répond avec un JSON structuré :\n{\n\"terme_source\": \"ENGAGEMENT_APPUI_FEU\",\n\"terme_cible\": \"DEMANDE_TIR_APPUI\",\n\"score_confiance\": 0.91,\n\"justification\": \"Le terme ENGAGEMENT est associé à APPUI_FEU,\nune urgence et une zone active. Le contexte\nindique une demande de tir d'appui, non un\nsens administratif ou contractuel.\"\n}\nPourquoi demander une explication en langage naturel ?\nParce que l'analyste qui va valider cette proposition doit pouvoir la lire, la comprendre, et décider en toute connaissance de cause. On ne lui donne pas un score abstrait. On lui donne le raisonnement. Il peut dire \"oui c'est logique\" ou \"non il manque un élément de contexte que le système ne connaît pas.\"\nCas du SIGINT BRAVO SECURE :\nQuand Mistral analyse ce message, il ne peut pas trancher, et il ne prétend pas le faire. Il raisonne :\n\"BRAVO SECURE peut signifier :\n→ Hypothèse 1 : la zone est sécurisée (lecture alliée)\n→ Hypothèse 2 : les forces ennemies se replient vers un\npoint de regroupement nommé BRAVO (lecture hostile)\nLe Drone ISR signale une présence hostile active dans le\nmême secteur à T+12 min. Ces deux lectures sont\nincompatibles. L'hypothèse 2 est plus cohérente avec le\ncontact actif, mais la certitude est insuffisante.\"\n→ Score : 0.35\n→ Proposition : ALERTE_CONTRADICTION\n→ Action : validation obligatoire, aucun engagement autorisé\nC'est le cas le plus important de tout le projet. Il montre que SynOps ne force pas une réponse quand il n'en a pas. Un système classique aurait aligné mécaniquement et aurait peut-être envoyé une alerte fausse. SynOps dit \"je ne sais pas, décidez vous-mêmes.\"",
    "keywords": []
  },
  {
    "id": "block-52",
    "title": "Étape 6 — CONTRÔLER (La validation humaine via Grist)",
    "category": "Pipeline",
    "source": "Guide SynOps",
    "content": "Section: Le pipeline en 8 étapes : de la donnée brute à la décision éclairée\n\nChaque proposition produite par les étapes précédentes atterrit dans Grist, pas directement dans un système de commandement, pas dans un rapport automatique. Dans une interface de validation.\nC'est quoi Grist ?\nGrist, c'est un tableur intelligent, open source, développé par Grist Labs. Il ressemble à Excel mais avec une vraie API, des droits granulaires, et la capacité de s'héberger on-premise (sur les serveurs du Ministère, sans dépendance externe). Il est référencé dans l'écosystème souverain de l'État français (convention CND-DINUM-AMIAD, janvier 2026).\nL'analyste opérationnel habilité ouvre son tableau Grist et voit :\n┌──────────────────────────────────────────────────────────────────────┐\n│ Terme source │ Terme cible │ Sens │ Score │ Statut │ Ana │\n├──────────────────────────────────────────────────────────────────────┤\n│ ENGAGEMENT_... │ DEMANDE_TIR_AP. │ ↔ │ 0.91 │ En attente│ — │\n│ TECHNICAL │ VÉHICULE_LGR_A. │ ↔ │ 0.74 │ En attente│ — │\n│ BRAVO_SECURE │ ALERTE_CONTRAD. │ → │ 0.35 │ En attente│ — │\n└──────────────────────────────────────────────────────────────────────┘\nIl peut faire 5 choses :\nPourquoi le signe ↔ pour ENGAGEMENT et TECHNICAL, mais → pour BRAVO_SECURE ?\nParce que BRAVO_SECURE n'est pas un mapping validé, c'est une alerte. On ne peut pas dire \"BRAVO_SECURE = ALERTE_CONTRADICTION dans les deux sens.\" On dit juste \"ce message génère une alerte de contradiction.\" La flèche simple indique que c'est une action, pas une correspondance réciproque.",
    "keywords": []
  },
  {
    "id": "block-53",
    "title": "Étape 7 — CAPITALISER (La mémoire qui apprend)",
    "category": "Pipeline",
    "source": "Guide SynOps",
    "content": "Section: Le pipeline en 8 étapes : de la donnée brute à la décision éclairée\n\nC'est là que SynOps devient vraiment intéressant sur la durée.\nChaque fois qu'un analyste valide un mapping, ce mapping entre dans le référentiel permanent de Grist. Et le système note :\nQui a validé (Analyste 01, Analyste 02...)\nQuand (14/01/2026)\nPourquoi (la justification de Mistral + éventuellement la correction de l'analyste)\nDans quel sens le mapping est valide (↔ bidirectionnel ou → unilatéral)\nLa conséquence concrète :\nAujourd'hui :\nTECHNICAL → passe 3 LLM nécessaire (inconnu du référentiel)\nDans 6 mois :\nTECHNICAL → passe 1 suffit (terme connu, correspondance validée)\nLe LLM fait de moins en moins de travail avec le temps, pas parce qu'il devient moins bon, mais parce que le référentiel s'enrichit et absorbe de plus en plus de cas connus. C'est ce qu'on appelle l'apprentissage institutionnel : la connaissance ne repart pas à zéro à chaque nouvelle opération.\nLa bidirectionnalité :\nQuand ENGAGEMENT_APPUI_FEU → DEMANDE_TIR_APPUI est validé, la règle inverse est créée automatiquement. Si demain un système écrit DEMANDE_TIR_APPUI et qu'un autre a besoin de le comprendre dans le vocabulaire de l'Armée de Terre, la correspondance existe dans les deux sens. C'est l'interopérabilité A↔B, pas juste A→B.",
    "keywords": []
  },
  {
    "id": "block-54",
    "title": "Étape 8 — RESTITUER (La sortie pivot MIM)",
    "category": "Pipeline",
    "source": "Guide SynOps",
    "content": "Section: Le pipeline en 8 étapes : de la donnée brute à la décision éclairée\n\nUne fois les validations faites, SynOps produit une sortie pivot commune, une image de situation unifiée que le PC de commandement peut consulter.\nCette sortie est structurée en JSON, inspirée du MIM (Military Information Model) de l'OTAN, et référence le cadre STANAG pour l'interopérabilité.\nAttention : ce n'est pas une implémentation certifiée MIM. C'est une sortie inspirée du MIM, le format de sortie respecte l'esprit et la structure du standard sans prétendre être conforme à la norme complète. C'est important à dire si le jury pose la question.\n{\n\"syntheseOperationnelle\": {\n\"secteur\": \"Secteur B\",\n\"horodatage\": \"14/01/2026 — 14:33Z\",\n\"cadreMIM\": \"sortie pivot inspirée MIM / réf. STANAG\",\n\"elements\": [\n{\n\"type\": \"PRÉSENCE_HOSTILE\",\n\"detail\": \"3 VEH + 12 PAX — direction NW\",\n\"confiance\": 0.78,\n\"source\": \"DRONE_ISR_7\"\n},\n{\n\"type\": \"DEMANDE_TIR_APPUI\",\n\"statut\": \"validée\",\n\"confiance\": 0.91,\n\"analyste\": \"Analyste 01\",\n\"mappingBidirectionnel\": true\n},\n{\n\"type\": \"VÉHICULE_LÉGER_ARMÉ\",\n\"statut\": \"capitalisé\",\n\"confiance\": 0.74,\n\"analyste\": \"Analyste 02\"\n},\n{\n\"type\": \"ALERTE_CONTRADICTION\",\n\"source\": \"SIGINT\",\n\"confiance\": 0.35,\n\"statut\": \"validation_obligatoire\",\n\"actionAutorisée\": false\n}\n]\n}\n}\nCe JSON est exportable, réutilisable, et lisible par n'importe quel système capable de lire du JSON standard. Le PC de commandement ne voit plus quatre messages séparés en langages différents, il voit une image structurée, validée, traçable.",
    "keywords": []
  },
  {
    "id": "block-55",
    "title": "L'architecture triple passe : la logique derrière",
    "category": "Pipeline",
    "source": "Guide SynOps",
    "content": "Pourquoi trois passes au lieu d'envoyer directement tout au LLM ?\nPour trois raisons simples :\nEfficacité. Un LLM prend 3 à 10 secondes à répondre. Si on a 1000 messages à traiter, envoyer tous les 1000 au LLM c'est entre 50 minutes et 3 heures. Avec la passe 1, 60% des cas sont résolus en millisecondes. La passe 2 en règle 25% supplémentaires en 1-2 secondes. Le LLM ne traite que les 15% vraiment difficiles.\nRésilience. Si le LLM tombe en panne (connexion coupée, API indisponible), les passes 1 et 2 continuent à fonctionner. Les cas ambigus sont mis en attente. Le système ne s'arrête pas.\nSouveraineté. Moins on appelle le LLM, moins on dépend d'une infrastructure externe. Et quand on l'appelle, c'est Mistral, un LLM français, hébergeable sur les serveurs du Ministère, sans données qui partent vers un cloud américain.\nVOLUME DE MESSAGES\n┌────────────────────────────┐\n│ 100% │\nPASSE 1 ────►│ ████████████████ 60% résolus automatiquement\n│\nPASSE 2 ────►│ ████████ 25% résolus par similarité sémantique\n│\nPASSE 3 ────►│ ████ 15% traités par raisonnement LLM\n└────────────────────────────┘\nTemps moyen : ms 1-2 sec 3-10 sec\nLLM sollicité : Non Non Oui (Mistral)\nFonctions sans LLM : 85% des cas traités",
    "keywords": []
  },
  {
    "id": "block-56",
    "title": "Le double rôle du LLM : global et local",
    "category": "Technique",
    "source": "Guide SynOps",
    "content": "Le LLM intervient à deux niveaux distincts, et c'est important de ne pas les confondre.",
    "keywords": []
  },
  {
    "id": "block-57",
    "title": "LLM Global : dès l'ingestion, une seule fois pour tous les messages",
    "category": "Technique",
    "source": "Guide SynOps",
    "content": "Section: Le double rôle du LLM : global et local\n\nÀ l'étape 2, le LLM lit tous les messages ensemble. Il ne fait pas d'alignement individuel, il cherche des patterns globaux. Est-ce que les sources se confirment ? Est-ce qu'il y a des contradictions ? Quelle est la cohérence générale de la situation ?\nCe travail de lecture croisée est fait une seule fois par lot de messages, pas pour chaque message individuellement. C'est efficace et ça donne un contexte global que les passes suivantes peuvent utiliser.",
    "keywords": []
  },
  {
    "id": "block-58",
    "title": "LLM Local : en passe 3, uniquement si nécessaire, message par message",
    "category": "Pipeline",
    "source": "Guide SynOps",
    "content": "Section: Le double rôle du LLM : global et local\n\nPour les cas ambigus, le LLM est appelé individuellement. Il prend un message, son contexte global, et il raisonne dessus. Il produit une proposition, un score, et une explication.\n┌─────────────────────────────────────────────────────┐\n│ LLM GLOBAL (étape 2) │\n│ \"Je lis les 4 sources ensemble. │\n│ Drone + Terre : cohérents sur le Secteur B. │\n│ SIGINT : potentiellement contradictoire. │\n│ Je prépare le contexte pour les passes.\" │\n└─────────────────────────────────────────────────────┘\n│\n┌───────────────┼───────────────┐\n▼ ▼ ▼\n┌─────────────┐ ┌─────────────┐ ┌─────────────┐\n│ Message 2 │ │ Message 3 │ │ Message 4 │\n│ LLM LOCAL │ │ LLM LOCAL │ │ LLM LOCAL │\n│ (passe 3) │ │ (passe 3) │ │ (passe 3) │\n│ \"Faux ami │ │ \"Terme │ │ \"Contradi │\n│ résolu\" │ │ inconnu │ │ ction dét. │\n│ │ │ inféré\" │ │ \" │\n└─────────────┘ └─────────────┘ └─────────────┘",
    "keywords": []
  },
  {
    "id": "block-59",
    "title": "Grist : l'interface humaine au cœur du système",
    "category": "Technique",
    "source": "Guide SynOps",
    "content": "Grist mérite qu'on s'y attarde, parce que c'est l'argument de capacité d'adoption le plus fort qu'on ait.",
    "keywords": []
  },
  {
    "id": "block-60",
    "title": "Pourquoi Grist et pas une vraie base de données ?",
    "category": "Technique",
    "source": "Guide SynOps",
    "content": "Section: Grist : l'interface humaine au cœur du système\n\nUne vraie base de données SQL nécessite un développeur pour la requêter. Un analyste opérationnel, qui est un expert militaire, pas un data scientist, n'ouvre pas pgAdmin tous les matins.\nGrist, c'est une interface tableau. L'analyste voit des lignes, des colonnes, des filtres. Il clique. Il valide ou il rejette. Il n'a pas besoin de savoir ce qu'est une jointure SQL ou une API REST.\nEt Grist expose une API REST standard, ce qui permet au pipeline Python de SynOps d'envoyer et recevoir des données automatiquement, en arrière-plan, sans que l'analyste ait à faire quoi que ce soit pour importer les propositions.",
    "keywords": []
  },
  {
    "id": "block-61",
    "title": "Le flux technique vers Grist",
    "category": "Technique",
    "source": "Guide SynOps",
    "content": "Section: Grist : l'interface humaine au cœur du système\n\nChaque proposition produite par le pipeline est envoyée via un appel POST à l'API de Grist :\nPOST /api/docs/{docId}/tables/mappings/records\n{\n\"terme_source\": \"TECHNICAL\",\n\"terme_cible\": \"VÉHICULE_LÉGER_ARMÉ\",\n\"justification\": \"TECHNICAL désigne...\",\n\"score\": 0.74,\n\"statut\": \"En attente\",\n\"date\": \"14/01/2026\"\n}\nEt quand l'analyste valide dans l'interface, le pipeline peut récupérer les nouveaux mappings validés via un GET et mettre à jour son cache local. Le dictionnaire de la passe 1 s'enrichit automatiquement.",
    "keywords": []
  },
  {
    "id": "block-62",
    "title": "Grist et la souveraineté",
    "category": "Technique",
    "source": "Guide SynOps",
    "content": "Section: Grist : l'interface humaine au cœur du système\n\nGrist est open source. Son code source est public. Il peut être déployé sur n'importe quel serveur, y compris les serveurs du Ministère des Armées, dans un environnement certifié SecNumCloud. Aucune donnée ne quitte l'infrastructure contrôlée. C'est exactement ce que le MINARM exige.",
    "keywords": []
  },
  {
    "id": "block-63",
    "title": "Ce que voit l'état-major : le résultat concret",
    "category": "Guide",
    "source": "Guide SynOps",
    "content": "Après tout ce traitement, qu'est-ce qui change réellement pour l'officier au PC de commandement ?\nAvant SynOps : Il reçoit quatre messages dans quatre formats. Il doit les lire un par un, comprendre ce que chacun veut dire, faire mentalement la correspondance entre les vocabulaires, et construire lui-même une image cohérente. En situation d'urgence, avec la pression du temps et d'autres messages qui continuent d'arriver, c'est une charge cognitive énorme.\nAprès SynOps : Il voit une synthèse structurée. Les termes ont été harmonisés. Les contradictions sont signalées. Les éléments validés sont distingués des éléments en attente. Il peut se concentrer sur la décision plutôt que sur la traduction.\nCe n'est pas SynOps qui décide. C'est toujours lui. Mais il décide avec une information plus claire, plus structurée, et moins risquée.\nAVANT APRÈS\n───── ─────\nHOSTILE_MOVEMENT ──► PRÉSENCE_HOSTILE · 3 VEH · Confiance 0.78\nENGAGEMENT_APPUI_FEU ──► DEMANDE_TIR_APPUI · Validée · Score 0.91\nTECHNICAL ──► VÉHICULE_LÉGER_ARMÉ · Capitalisé · 0.74\n\"BRAVO SECURE\" ──► ⚠ ALERTE CONTRADICTION · Action suspendue\nCharge cognitive : haute Charge cognitive : réduite\nRisque d'erreur : élevé Risque d'erreur : diminué\nTraçabilité : nulle Traçabilité : complète",
    "keywords": []
  },
  {
    "id": "block-64",
    "title": "\"Vous utilisez le MIM — mais le MIM c'est un standard OTAN complexe. Vous êtes vraiment conformes ?\"",
    "category": "Questions jury",
    "source": "Guide SynOps",
    "content": "Section: Questions possibles du jury\n\nNon, et on ne le prétend pas. Notre sortie est inspirée du MIM, elle adopte sa logique et sa structure, pas sa certification complète. Implémenter le MIM en entier serait un projet d'ingénierie de plusieurs années. Ce qu'on démontre c'est la méthode, pas la solution industrielle finale.",
    "keywords": [
      "jury",
      "question",
      "réponse",
      "oral",
      "pitch"
    ]
  },
  {
    "id": "block-65",
    "title": "\"Mistral peut halluciner. Qu'est-ce qui vous protège ?\"",
    "category": "Questions jury",
    "source": "Guide SynOps",
    "content": "Section: Questions possibles du jury\n\nTrois choses. D'abord, le prompt structuré force une réponse en JSON avec des champs précis, ça limite drastiquement les hallucinations. Ensuite, le score de confiance signale les incertitudes, un score bas n'entre pas automatiquement dans le référentiel. Enfin, l'analyste humain valide chaque proposition avant qu'elle devienne une règle permanente. Le LLM ne peut pas polluer le référentiel seul.",
    "keywords": [
      "jury",
      "question",
      "réponse",
      "oral",
      "pitch"
    ]
  },
  {
    "id": "block-66",
    "title": "\"Et si l'IA se trompe sur le faux ami ENGAGEMENT ?\"",
    "category": "Questions jury",
    "source": "Guide SynOps",
    "content": "Section: Questions possibles du jury\n\nC'est exactement pour ça que ENGAGEMENT est dans notre liste de \"faux amis\", il est directement envoyé en passe 3 sans tentative d'alignement automatique. Et la proposition de Mistral passe par validation humaine avant toute chose. Si l'analyste dit \"non, ici c'est un engagement contractuel\", il corrige et c'est cette correction qui enrichit le référentiel.",
    "keywords": [
      "jury",
      "question",
      "réponse",
      "oral",
      "pitch"
    ]
  },
  {
    "id": "block-67",
    "title": "\"Pourquoi CamemBERT et pas un autre modèle ?\"",
    "category": "Questions jury",
    "source": "Guide SynOps",
    "content": "Section: Questions possibles du jury\n\nParce que CamemBERT est entraîné spécifiquement sur du français. Les modèles multilingues sont moins précis sur les nuances d'une langue donnée. Et CamemBERT est open source, peut tourner complètement en local, pas d'appel externe, pas de dépendance. C'est souverain.",
    "keywords": [
      "jury",
      "question",
      "réponse",
      "oral",
      "pitch"
    ]
  },
  {
    "id": "block-68",
    "title": "\"Comment vous savez que ça scale ?\"",
    "category": "Questions jury",
    "source": "Guide SynOps",
    "content": "Section: Questions possibles du jury\n\nL'architecture en passes permet de gérer le volume. Les passes 1 et 2 traitent 85% des cas en quelques secondes. La passe 3 LLM n'est sollicitée que sur 15%, et en parallèle si besoin. Plus le référentiel s'enrichit avec le temps, plus ce ratio s'améliore. À terme, la passe 1 absorbe de plus en plus de cas.",
    "keywords": [
      "jury",
      "question",
      "réponse",
      "oral",
      "pitch"
    ]
  },
  {
    "id": "block-69",
    "title": "\"C'est quoi votre prototype exactement ?\"",
    "category": "Questions jury",
    "source": "Guide SynOps",
    "content": "Section: Questions possibles du jury\n\nC’est juste un démonstrateur conceptuel avec données fictives. Il illustre le pipeline, l'interface Grist, et le raisonnement LLM sur le scénario Serval. Ce n'est pas une solution industrielle déployée, c'est une idéation avec architecture technique définie et scénario ancré dans le réel. (C'est ce qu'attend la demi-finale.)",
    "keywords": [
      "jury",
      "question",
      "réponse",
      "oral",
      "pitch"
    ]
  },
  {
    "id": "block-70",
    "title": "\"Vous avez des chiffres d'impact ?\"",
    "category": "Questions jury",
    "source": "Guide SynOps",
    "content": "Section: Questions possibles du jury\n\nOn évite les chiffres que nous ne pouvons pas sourcer. Ce qu'on peut dire : dans notre démo, 3 des 4 cas sont résolus avec explication en quelques secondes. Le cas SIGINT génère une alerte en quelques secondes plutôt que d'être ignoré ou mal interprété. L'impact mesurable viendra des données réelles en déploiement (ce n'est pas notre rôle de les inventer).",
    "keywords": [
      "jury",
      "question",
      "réponse",
      "oral",
      "pitch"
    ]
  },
  {
    "id": "block-71",
    "title": "Pourquoi cette solution est innovante",
    "category": "Guide",
    "source": "Guide SynOps",
    "content": "Ce qui distingue SynOps des approches classiques, c'est qu'on n'essaie pas juste de connecter des tuyaux. On travaille sur le sens, et on assume que le sens ne peut pas être automatisé à 100%.\nLe vrai verrou de l'interopérabilité militaire, ce n'est pas le format des données. C'est leur sémantique. Et la sémantique dépend du contexte, du vocabulaire métier, de l'historique opérationnel, des choses que seul un expert humain peut vraiment valider.\nSynOps apporte l'IA là où elle change quelque chose : sur les cas ambigus, inconnus, ou contradictoires. Et elle maintient l'humain là où ça compte : dans la décision finale.\nC'est la valeur qu'on propose. Pas \"l'IA fait tout\". Mais \"l'IA fait ce que les règles ne peuvent pas faire, et l'humain fait ce que l'IA ne devrait pas décider seule.\"",
    "keywords": []
  },
  {
    "id": "block-72",
    "title": "Qui a fait quoi : l'équipe Deux au Carré",
    "category": "Équipe",
    "source": "Guide SynOps",
    "content": "Quatre femmes. Quatre profils. Une même formation de base : Au Carré, une ESN inclusive qui forme aux métiers du numérique des personnes que le secteur avait laissées de côté. En CDD d'insertion.\nSeda, Qiongnan, Mériam, Hanta.\nCe hackathon, c'est ce qu'on représente : apprendre en faisant, prouver que la pertinence ne dépend pas du parcours, et construire quelque chose qui a du sens, littéralement.\nSynOps — Synchronisation des Opérations Deux au Carré · Women in Gen AI 2026 · Ministère des Armées Démonstrateur conceptuel · Données fictives non sensibles",
    "keywords": []
  },
  {
    "id": "block-73",
    "title": "Analyse comparative honnête · Deux au Carré · Women in Gen AI 2026",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "L'objectif de ce document Répondre à la question du jury : \"Qu'est-ce qui n'existe pas déjà ?\" — sans survendre, sans minimiser. Être honnêtes sur ce que SynOps apporte de nouveau, et clairs sur ce que d'autres font déjà bien.",
    "keywords": []
  },
  {
    "id": "block-74",
    "title": "Vue d'ensemble — le paysage existant",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Le problème de l'interopérabilité des données militaires n'est pas nouveau. L'OTAN travaille dessus depuis les années 1990. Des industriels de la défense y investissent des centaines de millions d'euros. Des chercheurs en web sémantique ont publié des milliers d'articles dessus.\nAlors qu'est-ce que SynOps apporte que les autres n'apportent pas ?\nLa réponse courte : la combinaison spécifique de cinq éléments dans un même système. Chaque élément existe quelque part. La combinaison, elle, n'existe pas encore — certainement pas dans un contexte souverain français, avec une interface accessible aux opérationnels, et une mémoire institutionnelle qui apprend.\nVoici le panorama.",
    "keywords": []
  },
  {
    "id": "block-75",
    "title": "STANAG (Standardization Agreements OTAN)",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Section: Catégorie 1 — Les standards militaires existants\n\nCe que c'est : Les STANAG sont des accords de normalisation OTAN. Ils définissent des formats d'échange standardisés entre armées alliées. LINK 16, LINK 22 sont des STANAG pour les liaisons tactiques. STANAG 4774/4778 concerne la sécurité des données.\nCe qu'ils font bien : Ils standardisent les formats techniques. Si tout le monde utilise LINK 16, les systèmes se parlent automatiquement.\nCe qu'ils ne font pas : Ils ne gèrent pas la sémantique. Un STANAG dit \"le champ 42 contient un identifiant d'unité sous ce format.\" Il ne dit pas quoi faire quand une armée partenaire utilise un terme inconnu, ou quand deux messages semblent se contredire. Les STANAG traitent la syntaxe, pas le sens.\nPosition de SynOps : SynOps est complémentaire aux STANAG, pas concurrent. Sa sortie pivot est inspirée du MIM (le modèle conceptuel OTAN), ce qui la rend compatible avec l'écosystème STANAG sans nécessiter de conformité certifiée.",
    "keywords": []
  },
  {
    "id": "block-76",
    "title": "MIM — Military Information Model (OTAN)",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Section: Catégorie 1 — Les standards militaires existants\n\nCe que c'est : Le MIM est le modèle de données conceptuel de l'OTAN pour l'échange d'information militaire. Il définit les entités, leurs relations, et leurs attributs.\nCe qu'il fait bien : Il propose un langage commun pour structurer l'information militaire. Si tous les systèmes implémentent le MIM, ils peuvent théoriquement se comprendre.\nCe qu'il ne fait pas : Le MIM est un standard de structure, pas un système de traduction. Il ne résout pas le problème quand deux armées utilisent des ontologies différentes et qu'il faut faire le pont entre elles. Il ne gère pas non plus les cas ambigus ou les termes inconnus.\nPosition de SynOps : SynOps utilise le MIM comme référence de sortie. Le problème qu'il résout est en amont du MIM — comment faire converger des données hétérogènes vers un format proche du MIM, quand les données sources ne le respectent pas.",
    "keywords": []
  },
  {
    "id": "block-77",
    "title": "NIEM — National Information Exchange Model (États-Unis)",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Section: Catégorie 1 — Les standards militaires existants\n\nCe que c'est : NIEM est un standard américain d'échange d'information, utilisé dans les domaines civil et militaire aux États-Unis. Il définit des modèles de données extensibles pour permettre l'interopérabilité entre agences gouvernementales.\nCe qu'il fait bien : Très complet sur la modélisation des données. Large communauté. Beaucoup de cas d'usage documentés.\nCe qu'il ne fait pas : Ce n'est pas un standard français. Le MINARM ne l'a pas adopté comme standard national. On peut s'en inspirer pour la structure de nos données, mais on ne peut pas le présenter comme la base de notre solution devant un jury français.\nPosition de SynOps : On l'a utilisé comme ressource d'idéation pour structurer nos sorties — c'est tout. On ne prétend pas être \"conformes NIEM.\"",
    "keywords": []
  },
  {
    "id": "block-78",
    "title": "Palantir Gotham / Foundry",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Section: Catégorie 2 — Les plateformes d'intelligence militaire\n\nCe que c'est : Palantir est la référence mondiale des plateformes d'analyse de données pour la défense et le renseignement. Utilisée par l'US Army, la CIA, le FBI, et plusieurs alliés OTAN. Gotham est la version défense/renseignement, Foundry la version entreprise.\nCe qu'elle fait bien : Intégration de sources hétérogènes massives. Visualisation des relations entre entités. Analyse réseau. Fusion de données. Interface puissante pour les analystes.\nCe qu'elle ne fait pas :\nElle fusionne des données, mais ne produit pas d'explication en langage naturel sur pourquoi deux termes sont équivalents.\nElle n'a pas de mécanisme de capitalisation sémantique — le référentiel ne s'enrichit pas automatiquement à chaque validation.\nElle ne détecte pas les contradictions sémantiques entre sources de façon autonome et expliquée.\nProblème majeur : Cloud Act américain. Palantir est une entreprise américaine. Ses données peuvent légalement être requises par le gouvernement américain. Pour des données classifiées françaises, c'est rédhibitoire.\nPosition de SynOps : SynOps n'est pas une plateforme de fusion de données à la Palantir. C'est un outil plus ciblé, qui résout un problème spécifique en amont : aligner sémantiquement des vocabulaires hétérogènes, avec explication et validation humaine. Et il est souverain.",
    "keywords": []
  },
  {
    "id": "block-79",
    "title": "Thales — solutions C4I",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Section: Catégorie 2 — Les plateformes d'intelligence militaire\n\nCe que c'est : Thales est le premier industriel français de défense électronique. Ils produisent des systèmes de commandement et de contrôle (C4I) pour les armées françaises et étrangères.\nCe qu'ils font bien : Des systèmes robustes, certifiés, intégrés dans les infrastructures existantes. Ils connaissent les besoins du MINARM depuis des décennies.\nCe qu'ils ne font pas : Leurs systèmes sont propriétaires, fermés, très longs à déployer (années), et très coûteux. Un projet Thales pour résoudre le problème de l'interopérabilité sémantique prendrait probablement 5 à 10 ans et plusieurs dizaines de millions d'euros. Et il ne serait probablement pas basé sur un LLM génératif — la GenAI est trop récente pour leurs cycles de développement.\nPosition de SynOps : On n'est pas en concurrence avec Thales — on propose une méthode proof-of-concept qu'un industriel comme Thales pourrait industrialiser. On est la preuve que ça marche, pas la solution de production finale.",
    "keywords": []
  },
  {
    "id": "block-80",
    "title": "SCCOA, SIA, et les systèmes d'information des armées françaises",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Section: Catégorie 2 — Les plateformes d'intelligence militaire\n\nCe que c'est : Ce sont les systèmes d'information opérationnels utilisés par les différentes armées françaises. SCCOA pour l'Armée de l'Air, SIA pour l'Armée de Terre, etc.\nCe qu'ils font bien : Ils gèrent efficacement l'information dans leur propre domaine. Ils sont adaptés aux besoins spécifiques de chaque armée.\nCe qu'ils ne font pas : Ils ne communiquent pas facilement entre eux. Chaque système a été conçu pour son armée, avec son vocabulaire, ses formats, ses protocoles. L'interopérabilité entre ces systèmes est précisément le problème que le MINARM a soumis au hackathon.\nPosition de SynOps : SynOps se positionne comme une couche de médiation entre ces systèmes — pas pour les remplacer, mais pour permettre à leurs données de se comprendre mutuellement.",
    "keywords": []
  },
  {
    "id": "block-81",
    "title": "AgreementMaker, LogMap, SILK, LIMES",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Section: Catégorie 3 — Les outils de web sémantique et d'alignement d'ontologies\n\nCe que c'est : Des outils académiques et open source pour l'alignement automatique d'ontologies. Ils comparent deux ontologies (deux ensembles de concepts et leurs relations) et proposent des correspondances entre elles.\nCe qu'ils font bien : Alignement automatique à grande échelle. Techniques éprouvées (similarité lexicale, structurelle, sémantique). Gratuits et open source.\nCe qu'ils ne font pas :\nIls produisent des scores, pas des explications en langage naturel.\nIls ne gèrent pas les cas ambigus avec du raisonnement contextuel.\nIls n'ont pas de mécanisme de validation humaine intégré.\nIls ne capitalisent pas les corrections d'experts dans un référentiel évolutif.\nIls ne fonctionnent pas sur du texte militaire brut — ils nécessitent que les ontologies soient déjà formalisées en RDF/OWL.\nPosition de SynOps : SynOps utilise des idées proches (similarité sémantique en passe 2), mais il va plus loin : il raisonne sur les cas que ces outils ne peuvent pas résoudre, et il produit une explication lisible par un humain.",
    "keywords": []
  },
  {
    "id": "block-82",
    "title": "Apache Jena, Protégé, OWL",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Section: Catégorie 3 — Les outils de web sémantique et d'alignement d'ontologies\n\nCe que c'est : Des frameworks de web sémantique pour créer, manipuler et requêter des ontologies formelles. Très utilisés dans la recherche académique et certains projets industriels.\nCe qu'ils font bien : Modélisation formelle de la connaissance. Raisonnement logique sur les ontologies. Standard W3C.\nCe qu'ils ne font pas : Ils nécessitent que toutes les connaissances soient formalisées en avance. Dans un contexte opérationnel militaire, les termes évoluent, les alliés changent, les situations sont nouvelles. On ne peut pas tout formaliser à l'avance — c'est précisément pour ça qu'il faut une couche de raisonnement génératif.\nPosition de SynOps : On s'inspire de la logique du web sémantique pour la structure de notre référentiel, mais on l'associe à un LLM pour gérer les cas que la formalisation ne peut pas anticiper.",
    "keywords": []
  },
  {
    "id": "block-83",
    "title": "GPT-4 / Azure OpenAI pour la défense",
    "category": "Technique",
    "source": "Comparaison mondiale",
    "content": "Section: Catégorie 4 — Les LLMs directement appliqués à la défense\n\nCe que c'est : Microsoft propose Azure OpenAI Government — une version de GPT-4 hébergée sur des serveurs certifiés pour les gouvernements américains. Plusieurs armées occidentales expérimentent l'utilisation de LLMs pour l'analyse de données.\nCe qu'ils font bien : Compréhension contextuelle puissante. Raisonnement sur des textes complexes. Génération d'explications.\nCe qu'ils ne font pas :\nPas de mémoire institutionnelle — chaque conversation repart de zéro.\nPas de capitalisation — les corrections d'experts ne s'accumulent pas dans un référentiel.\nPas de validation humaine structurée.\nProblème de souveraineté pour les données françaises — Azure Government est américain.\nPas de pipeline progressif — tout passe par le LLM, même les cas simples.\nPosition de SynOps : On utilise Azure OpenAI pour notre prototype de démo hackathon (c'est précisé sur notre slide C comme \"prototype, si confirmé\"). En production, on préconise Mistral on-premise. Et SynOps ajoute ce qu'aucun LLM seul ne fait : la mémoire, la capitalisation, la validation humaine.",
    "keywords": []
  },
  {
    "id": "block-84",
    "title": "Mistral AI directement",
    "category": "Technique",
    "source": "Comparaison mondiale",
    "content": "Section: Catégorie 4 — Les LLMs directement appliqués à la défense\n\nCe que c'est : Mistral AI est une startup française fondée en 2023, qui a développé des LLMs open source de haut niveau. Mistral Large rivalise avec GPT-4. Mistral peut être hébergé on-premise.\nCe qu'il fait bien : Raisonnement en français. Open source. Souverain. Performant.\nCe qu'il ne fait pas seul : Sans le pipeline SynOps, Mistral est un LLM généraliste. Il n'a pas de référentiel militaire, pas de passe 1 pour les cas simples, pas d'interface Grist pour la validation, pas de mécanisme de capitalisation. Il produit des réponses mais ne les capitalise pas.\nPosition de SynOps : Mistral est le moteur de la passe 3 de SynOps. SynOps est l'architecture qui l'entoure, le cadre qui lui donne un contexte, et la mémoire qui enrichit ce qu'il apprend à travers les validations humaines.",
    "keywords": []
  },
  {
    "id": "block-85",
    "title": "Les projets de souveraineté numérique militaire en France",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Section: Catégorie 5 — Ce qui commence à émerger (mais n'est pas encore là)\n\nCe qui se passe : La DGA (Direction Générale de l'Armement) finance des projets IA pour la défense. L'AID (Agence de l'Innovation de Défense) lance des appels à projets. Des startups de défense tech émergent.\nOù en est-on : La majorité de ces projets sont encore en phase de recherche ou de prototypage. L'application spécifique de LLMs génératifs à l'interopérabilité sémantique militaire en temps opérationnel, avec une interface de validation humaine et un référentiel évolutif, n'est pas encore documentée publiquement comme un produit existant.\nCe que ça veut dire pour SynOps : On est dans une fenêtre d'opportunité. Le sujet est reconnu comme important (c'est pour ça que le MINARM l'a proposé au hackathon), les technologies existent (Mistral, CamemBERT, Grist), mais la solution combinée n'est pas encore sur le marché.",
    "keywords": []
  },
  {
    "id": "block-86",
    "title": "Le tableau de comparaison — ce que chaque solution fait ou ne fait pas",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "STD PALANTIR THALES OUTILS LLM SYNOPS\nNATO GOTHAM C4I ONTOL. SEUL\n─────────────────────────────────────────────────────────────────────────\nHarmonise les formats ✅ ✅ ✅ ✅ ⚠️ ✅\nAligne les vocabulaires ⚠️ ⚠️ ⚠️ ✅ ✅ ✅\nRaisonne sur l'ambigu ❌ ❌ ❌ ❌ ✅ ✅\nExplique en fr. naturel ❌ ❌ ❌ ❌ ✅ ✅\nDétecte contradictions ❌ ⚠️ ❌ ❌ ⚠️ ✅\nValide via humain ❌ ⚠️ ⚠️ ❌ ❌ ✅\nCapitalise les valid. ❌ ❌ ❌ ❌ ❌ ✅\nMapping bidirectionnel ❌ ❌ ❌ ⚠️ ❌ ✅\nSouverain (FR) ⚠️ ❌ ✅ ✅ ❌ ✅\nAccessible (non-tech) ❌ ❌ ❌ ❌ ⚠️ ✅\nDéployable rapidement ❌ ❌ ❌ ⚠️ ✅ ✅\n✅ = oui ⚠️ = partiellement ❌ = non",
    "keywords": []
  },
  {
    "id": "block-87",
    "title": "La combinaison pipeline + explication + capitalisation",
    "category": "Pipeline",
    "source": "Comparaison mondiale",
    "content": "Section: Ce que SynOps apporte de vraiment nouveau\n\nIndividuellement, les passes 1 et 2 existent (règles et embeddings). Le LLM existe. Grist existe. Ce qui n'existe pas, c'est la façon dont on les combine :\nLes règles filtrent les cas simples\nLes embeddings rapprochent les termes proches\nLe LLM raisonne sur les cas impossibles à trancher autrement\nLe LLM explique son raisonnement en langage naturel\nL'humain valide ou corrige\nLa correction enrichit le référentiel pour la prochaine fois\nCette boucle complète — traitement progressif + explication + validation + capitalisation — n'est pas documentée dans les solutions existantes.",
    "keywords": []
  },
  {
    "id": "block-88",
    "title": "L'explicabilité orientée décision militaire",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Section: Ce que SynOps apporte de vraiment nouveau\n\nLa plupart des outils d'alignement d'ontologies produisent un score entre 0 et 1. SynOps produit une phrase en français militaire qui dit pourquoi le terme a été aligné ainsi. C'est la différence entre \"score 0.91\" et \"Le terme ENGAGEMENT est associé à APPUI_FEU, une urgence et une zone active — c'est un ordre de tir, pas un contrat.\" L'analyste comprend. Il peut valider ou corriger en connaissance de cause.",
    "keywords": []
  },
  {
    "id": "block-89",
    "title": "La détection de contradictions entre sources",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Section: Ce que SynOps apporte de vraiment nouveau\n\nLa plupart des systèmes traitent chaque message individuellement. SynOps regarde les messages ensemble — il compare les sources et signale quand elles se contredisent. Le cas BRAVO SECURE vs Drone ISR n'aurait pas été détecté par un outil d'alignement classique. SynOps le repère, abaisse le score, et alerte l'analyste.",
    "keywords": []
  },
  {
    "id": "block-90",
    "title": "La souveraineté du bout en bout",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Section: Ce que SynOps apporte de vraiment nouveau\n\nMistral AI (français, open source), CamemBERT (Inria/Meta, entraîné sur du français, on-premise), Grist (open source, on-premise). Aucune donnée ne passe par un cloud américain. Aucune dépendance au Cloud Act. Pour le Ministère des Armées, c'est un prérequis — pas un bonus.",
    "keywords": []
  },
  {
    "id": "block-91",
    "title": "L'accessibilité pour les opérationnels",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Section: Ce que SynOps apporte de vraiment nouveau\n\nGrist ressemble à un tableur. Un analyste opérationnel n'a pas besoin de formation technique. Il valide, corrige, rejette — et chaque action enrichit le système. C'est ce qui distingue SynOps d'un outil académique d'alignement d'ontologies qui nécessite un doctorat pour être utilisé.",
    "keywords": []
  },
  {
    "id": "block-92",
    "title": "Ce que SynOps ne fait pas (et c'est intentionnel)",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "SynOps ne remplace pas les systèmes d'information des armées. Il se connecte à eux en amont, lit leurs messages, produit une synthèse. Il ne modifie pas les systèmes existants.\nSynOps n'est pas une plateforme de fusion de données à grande échelle. Il se concentre sur l'interopérabilité sémantique — comprendre le sens des termes — pas sur la corrélation de millions de données en temps réel.\nSynOps ne certifie pas la conformité MIM/STANAG. Il s'en inspire. La certification est un projet industriel de plusieurs années.\nSynOps n'est pas une solution industrielle déployée. C'est un démonstrateur conceptuel avec une architecture clairement définie. La valeur est dans la méthode et la preuve de faisabilité.",
    "keywords": []
  },
  {
    "id": "block-93",
    "title": "Ce qu'on dirait si le jury demande : \"Pourquoi ça n'existe pas déjà ?\"",
    "category": "Comparaison",
    "source": "Comparaison mondiale",
    "content": "Trois raisons concrètes.\nPremière raison : les LLMs génératifs sont très récents. Mistral AI a été fondée en 2023. GPT-4 date de 2023. CamemBERT de 2019. L'idée de combiner des embeddings et des LLMs dans un pipeline progressif pour l'interopérabilité militaire n'aurait pas été faisable il y a cinq ans avec des outils souverains.\nDeuxième raison : la souveraineté technologique est une contrainte nouvelle. Avant les révélations sur le Cloud Act américain et les enjeux de données militaires dans les clouds étrangers, personne ne cherchait un stack 100% souverain pour ce cas d'usage. Aujourd'hui c'est une exigence. Et Mistral + CamemBERT + Grist rendent possible un stack souverain performant.\nTroisième raison : le problème a longtemps été traité par la standardisation. \"Tout le monde adopte le même standard et le problème disparaît.\" En pratique, ça ne marche pas — les armées ont des systèmes hétérogènes depuis des décennies et les cycles de standardisation sont très longs. SynOps prend le problème à l'envers : au lieu de standardiser les sources, on crée une couche de médiation qui comprend la diversité des sources.\nSynOps — Synchronisation des Opérations Deux au Carré · Women in Gen AI 2026 · Ministère des Armées",
    "keywords": []
  },
  {
    "id": "block-94",
    "title": "Comment prenez-vous en compte les échanges avec les niveaux opératif et stratégique ?",
    "category": "Finale",
    "source": "Préparation finale",
    "content": "Question à poser au Jury: Sur les échanges entre niveaux, est-ce qu’on doit montrer la remontée des informations du terrain vers l’opératif et le stratégique, ou montrer aussi la redescente de règles, de consignes ou de mises à jour du référentiel ? Si MINARM répond les 2:\nD’accord. Et pour rester clair dans une démo courte, est-ce qu’un exemple des deux vous paraît suffisant ? On peut par exemple montrer un incident tactique qui remonte sous forme de synthèse opérative, puis une règle de traitement ou un enrichissement du référentiel qui redescend vers le niveau tactique. Est-ce que ce niveau de démonstration vous paraît suffisant ?\n\nAujourd’hui, chaque niveau — tactique, opératif, stratégique — produit et consomme l’information avec ses propres codes, ses propres priorités et parfois ses propres référentiels.\n\nSynOps ne cherche pas à uniformiser les métiers ou les décisions.\nSon rôle est plutôt de créer une continuité sémantique entre ces niveaux.\n\nPar exemple :\n- au niveau tactique, on reçoit des messages très terrain, souvent rapides, incomplets ou codifiés ;\n- au niveau opératif, on cherche à comprendre l’impact sur la manœuvre globale ;\n- au niveau stratégique, on a besoin d’une vision consolidée, contextualisée et traçable.\n\nSynOps agit comme une couche de médiation :\nil conserve le message d’origine, mais produit une interprétation partagée et explicable.\n\nCela permet :\n- de limiter les pertes de sens lors des remontées d’information ;\n- de réduire les ambiguïtés entre chaînes fonctionnelles ;\n- et surtout de garder une cohérence de compréhension entre les différents échelons de commandement.\n\nL’autre point important, c’est la traçabilité :\nà chaque étape, on sait :\n- quelle donnée est brute,\n- quelle transformation a été proposée,\n- quel niveau de confiance est associé,\n- et quel humain a validé ou non l’interprétation.\n\nDonc l’objectif n’est pas de remplacer les échanges entre niveaux,\nmais de fluidifier la circulation du sens entre eux, tout en gardant le contrôle humain et la capacité d’arbitrage à chaque échelon.",
    "keywords": [
      "finale",
      "jury",
      "demi-finale",
      "cadrage",
      "question"
    ]
  },
  {
    "id": "block-95",
    "title": "Au nombre de LLM utilisé en série et au regard de la volumétrie des données entrantes, est-ce que la puissance de calcul ne sera-t-elle pas fortement limitante ?",
    "category": "Finale",
    "source": "Préparation finale",
    "content": "Sur la puissance de calcul et l’IA frugale terrain, on voudrait vérifier ce que vous attendez exactement.\nDans la version finale, on envisage de montrer que SynOps ne fait pas tout passer directement par le LLM : les messages seraient d’abord regroupés, filtrés, comparés au référentiel et traités par règles quand c’est possible.\nLe LLM serait réservé aux cas ambigus ou contradictoires ou aux nouveaux cas.\nDonc vous voulez qu’on vous montre cette réduction des appels LLM et aussi un mode terrain frugal, capable de fonctionner avec des moyens plus légers quand la connexion est limitée?\n\nC’est justement pour éviter cette limite que nous n’utilisons pas le LLM partout ni tout le temps.\n\nL’architecture de SynOps est pensée en cascade, avec plusieurs niveaux de traitement :\n- d’abord les règles métier et le référentiel,\n- ensuite les rapprochements sémantiques plus classiques,\n- et seulement en dernier recours l’IA générative.\n\nDonc le LLM n’est sollicité que pour les cas ambigus ou réellement complexes.\n\nDans notre démonstrateur, la majorité des messages simples sont traités sans génération de texte.\nCela réduit fortement la charge de calcul et améliore la robustesse globale.\n\nEnsuite, plusieurs éléments limitent l’impact de la volumétrie :\n- les messages opérationnels sont souvent courts et structurés ;\n- les traitements peuvent être parallélisés ;\n- et surtout, SynOps ne cherche pas à “raisonner” sur tout le flux mondial en permanence.\n\nL’objectif est de faire intervenir le calcul coûteux uniquement là où il apporte une vraie valeur de compréhension.\n\nIl y a aussi un enjeu d’architecture :\nnous avons choisi des modèles locaux plus compacts, comme Mistral, précisément pour rester compatibles avec des environnements souverains et contraints.\n\nEt enfin, le système reste dégradable :\nsi le LLM devient indisponible ou saturé,\nles règles, le référentiel et les mécanismes déterministes continuent de fonctionner.\nOn perd en finesse d’interprétation, mais pas la continuité opérationnelle.\n\nDonc oui, la puissance de calcul est un sujet réel,\nmais notre approche consiste justement à réserver l’IA générative aux zones d’incertitude, pas à en faire une dépendance permanente.",
    "keywords": [
      "finale",
      "jury",
      "demi-finale",
      "cadrage",
      "question"
    ]
  },
  {
    "id": "block-96",
    "title": "Le choix d’une sémantique “francophone” ne convient pas à une situation « interalliés » où l’usage de l’anglais est une exigence à prendre en compte.",
    "category": "Finale",
    "source": "Préparation finale",
    "content": "En fait notre idée n’est pas de figer SynOps sur le français. Le démonstrateur est francophone, mais la brique modèle peut être adaptée : CamemBERT pour le français, ou un modèle multilingue comme XLM-RoBERTa dans une cible interalliée. Le pipeline reste le même ; ce qui change, c’est la brique linguistique et le contenu du référentiel.\nQuestion: Pour la finale, faut-il montrer une logique français-anglais avec l’anglais comme langue pivot, ou aller vers un référentiel multilingue où les termes ambigus sont validés par un humain avant d’être ajoutés au référentiel ?\n\nEn réalité, SynOps n’est pas conçu autour d’une langue unique, mais autour d’une médiation sémantique.\n\nLe français dans la démonstration est surtout un choix de présentation et de souveraineté technologique.\nMais l’architecture est pensée pour fonctionner dans un contexte interallié.\n\nDans une coalition, chaque acteur peut produire des messages :\n- en anglais OTAN,\n- dans sa langue nationale,\n- avec ses propres acronymes ou standards métiers.\n\nLe problème n’est donc pas uniquement linguistique,\nil est surtout sémantique :\ndeux acteurs peuvent utiliser des termes différents pour parler du même événement opérationnel.\n\nC’est précisément là que SynOps intervient.\n\nLe système peut :\n- conserver le message source dans sa langue d’origine ;\n- identifier les concepts opérationnels ;\n- puis les rapprocher d’un référentiel commun partagé.\n\nL’objectif n’est pas de “traduire mot à mot”,\nmais d’obtenir une compréhension alignée entre partenaires.\n\nD’ailleurs, l’usage d’un LLM multilingue permet justement de gérer :\n- les synonymes,\n- les formulations OTAN (Organisation du traité de l'Atlantique nord : Une Alliance défensive qui assure la sécurité et la défense de l'espace euro-atlantique depuis plus de 70 ans),\n- les différences doctrinales,\n- ou certains écarts de vocabulaire entre nations alliées.\n\nEt le contrôle humain reste essentiel :\ndans un contexte interallié, certaines interprétations doivent être validées par les analystes ou les officiers de liaison.\n\nDonc la francophonie n’est pas une limite structurelle du système.\nAu contraire, le démonstrateur montre qu’on peut construire une couche de compréhension partagée au-dessus de systèmes et de langues différentes.",
    "keywords": [
      "finale",
      "jury",
      "demi-finale",
      "cadrage",
      "question"
    ]
  },
  {
    "id": "block-97",
    "title": "Au niveau des données, est-ce que vous avez des éléments par rapport à cet aspect ?",
    "category": "Finale",
    "source": "Préparation finale",
    "content": "Sur la sécurité des données, on veut éviter une réponse trop générale. Selon vous, quel est le point de vigilance prioritaire à traiter dans notre solution finale ?\nSi réponse pas trop claire: Est-ce que votre inquiétude porte plutôt sur l’accès aux données, leur traçabilité, ou ce qui est transmis au LLM ?",
    "keywords": [
      "finale",
      "jury",
      "demi-finale",
      "cadrage",
      "question"
    ]
  },
  {
    "id": "block-98",
    "title": "J’aimerais bien que vous me développiez les interruptions ou justement les failles. Et comment ça réagit et comment l’IA nous aide à réagir.",
    "category": "Finale",
    "source": "Préparation finale",
    "content": "Quand vous avez évoqué les interruptions et les failles, quel type de situation aviez-vous principalement en tête ?\nSi besoin de relance seulement après\nEst-ce que vous pensiez plutôt à une panne technique, à une perte de source, à une donnée contradictoire, ou à une connexion dégradée ?",
    "keywords": [
      "finale",
      "jury",
      "demi-finale",
      "cadrage",
      "question"
    ]
  },
  {
    "id": "block-99",
    "title": "Sur la finale elle-même.",
    "category": "Finale",
    "source": "Préparation finale",
    "content": "Pour la finale, quel niveau attendez-vous : un démonstrateur narratif enrichi avec l'architecture complète, ou un prototype fonctionnel avec de vrais appels LLM en temps réel ?",
    "keywords": [
      "finale",
      "jury",
      "demi-finale",
      "cadrage",
      "question"
    ]
  },
  {
    "id": "block-100",
    "title": "Sur ce qu’ils imaginent déjà.",
    "category": "Finale",
    "source": "Préparation finale",
    "content": "J’ai une question sur le positionnement de SynOps. Comme SynOps est pensé comme une couche de médiation sémantique entre des sources hétérogènes, faut-il rester pour la finale à un niveau conceptuel, ou évoquer aussi des interfaces possibles avec des systèmes d’information de commandement, de renseignement ou de planification ?",
    "keywords": [
      "finale",
      "jury",
      "demi-finale",
      "cadrage",
      "question"
    ]
  },
  {
    "id": "block-101",
    "title": "Sur ce qui leur manquait en demi-finale.",
    "category": "Finale",
    "source": "Préparation finale",
    "content": "Avant de conclure, j’ai une dernière question de cadrage : au-delà des trois questions reçues, y a-t-il un point que vous jugez important de faire apparaître dans notre démonstrateur final ?",
    "keywords": [
      "finale",
      "jury",
      "demi-finale",
      "cadrage",
      "question"
    ]
  }
];

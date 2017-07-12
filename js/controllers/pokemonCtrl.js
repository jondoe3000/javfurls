angular.module('app.ctrl')
    .controller('pokemonCtrl', function () {
        this.tab = 'pokedex'
        this.pokemon = {
            id: "001",
            name: "Bulbasaur",
            species: "Seed Pokémon",
            type: ["Grass", "Poison"],
            height: "2′4″ (0.71m)",
            weight: "15.2 lbs (6.9 kg)",
            abilities: ["Overgrow", "Chlorophyll"],
            stats: {
                hp: 45,
                attack: 49,
                defense: 49,
                "sp.atk": 65,
                "sp.def": 65,
                speed: 45,
                total: 318
            },
            evolution: ["Bulbasaur", "Ivysaur", "Venusaur"]
        };


    })
    .controller('pokemonCommentsCtrl', function () {
        var vm = this;
        vm.comments = [];
        vm.comment = {
           /* body: 'A Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban; mikor egy ismeretlen nyomdász összeállította a betûkészletét és egy példa-könyvet vagy szöveget nyomott papírra, ezt használta. Nem csak 5 évszázadot élt túl, de az elektronikus betûkészleteknél is változatlanul megmaradt. Az 1960-as években népszerûsítették a Lorem Ipsum részleteket magukbafoglaló Letraset lapokkal, és legutóbb softwarekkel mint például az Aldus Pagemaker.',*/
          /*  email: 'abc@def.g',*/
            anonymous: false

        }
        vm.show = false
        vm.anonymousChange = function () {
            vm.comment.email = (vm.comment.anonymous) ? '' : vm.comment.email
        }
        vm.toggle = {
            show: false,
            label: 'Show',
            fn: function () {
                vm.toggle.show = !vm.toggle.show
                vm.toggle.label = (vm.toggle.show) ? 'Hide' : 'Show'
            }
        }
        vm.addComment = function (valid) {
            if (valid) {
                vm.comment.date = new Date()
                vm.comments.push(vm.comment);
                console.log(vm.comments);
                vm.comment = {};
            } else {
                console.log('Not valid');
            }
        }
    })
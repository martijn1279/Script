//<!--@@INCLUDE "\greasemonkey\imports.txt" INDENT=0 //-->
function sangu_ready() {
    var sangu_version = "//<!--@@INCLUDE "\version.txt" INDENT=0 //-->";

    // User config
    var user_data = {};
    //<!--@@INCLUDE "\config\settings_world.js" INDENT=1 //-->
    //<!--@@INCLUDE "\config\settings.js" INDENT=1 //-->
    //<!--@@INCLUDE "\config\settings_world2.js" INDENT=1 //-->
	
	var trans =
	//<!--@@INCLUDE "\config\trans.js" INDENT=1 //-->
	
	//<!--@@INCLUDE "\func\persistence.js" INDENT=1 //-->
	//<!--@@INCLUDE "\func\ui.js" INDENT=1 //-->
    //<!--@@INCLUDE "\feature\activator.js" INDENT=1 //-->
    if (isSanguActive) {
		var world_data = {};
		//<!--@@INCLUDE "\config\server.js" INDENT=2 //-->
		//<!--@@INCLUDE "\config\world_config.js" INDENT=2 //-->
        //<!--@@INCLUDE "\config\worlds.js" INDENT=2 //-->

		//<!--@@INCLUDE "\func\!unsorted.js" INDENT=2 //-->
        //<!--@@INCLUDE "\func\number.js" INDENT=2 //-->
        //<!--@@INCLUDE "\func\datetime.js" INDENT=2 //-->
		//<!--@@INCLUDE "\func\tw_buildings.js" INDENT=2 //-->
		
		//<!--@@INCLUDE "\feature\jumper.js" INDENT=2 //-->
		
		//<!--@@INCLUDE "\func\debug.js" INDENT=2 //-->

        // BEGIN PAGE PROCESSING
		// MAIN VILLAGE OVERVIEW 
        if (location.href.indexOf('screen=overview') > -1 && location.href.indexOf('screen=overview_villages') == -1) {
            var content_value = $("#content_value");
            var slowest_unit = null;

            //<!--@@INCLUDE "\page\overview_mainvillage\supportingunits.js" INDENT=3 //-->
			//<!--@@INCLUDE "\page\overview_mainvillage\tagger.js" INDENT=3 //-->
        }
		
		// MAP
        else if (location.href.indexOf("screen=map") > -1) {
            //<!--@@INCLUDE "\page\map\dodge_fromMainTagger.js" INDENT=3 //-->
        }
		// REPORT PUBLISH
        else if (location.href.indexOf('screen=report') > -1 && location.href.indexOf('mode=publish') > -1) {
            //<!--@@INCLUDE "\page\report.js" //-->
        }
		// MAIN
        else if (location.href.indexOf('screen=main') > -1) {
			//<!--@@INCLUDE "\page\main_construction\main.js" INDENT=3 //-->
            //<!--@@INCLUDE "\page\main_construction\renamevillage.js" INDENT=3 //-->
            //<!--@@INCLUDE "\page\main_construction\loyalty.js" INDENT=3 //-->
        }
		// SNOB
        else if (location.href.indexOf('screen=snob') > -1 && location.href.indexOf('mode=reserve') == -1) {
            //<!--@@INCLUDE "\page\snob.js" INDENT=3 //-->
        }
		// COMMAND INFO
        else if (location.href.indexOf('screen=info_command') > -1) {
            //<!--@@INCLUDE "\page\info_command\info_command.js" INDENT=3 //-->
        }
		// USERPROFIEL++ // INFO_ ALLY/PLAYER
        else if ((location.href.indexOf('screen=info_') > -1 && location.href.indexOf('screen=info_member') == -1) || location.href.indexOf('screen=ally&mode=profile') > -1) {
			//<!--@@INCLUDE "\page\info_villageplayertribe\info_all.js" INDENT=3 //-->
        }
		// TRIBAL WAR STATS
        else if (location.href.indexOf('screen=wars') > -1 && (location.href.indexOf('mode=running') > -1 || location.href.indexOf('mode=') == -1)) {
			// Wars don't really work anymore after changes by Innogames
			// To get the same result, many ajax calls would now be needed
			// Remove space between // and <!-- to include the code again
            // <!--@@INCLUDE "\page\wars.js" INDENT=3 //-->
        }
		// MARKET
        else if (location.href.indexOf('screen=market') > -1) {
            //<!--@@INCLUDE "\page\market.js" INDENT=3 //-->
        }
		
		
		
		
		// SETTINGS
        else if (location.href.indexOf('screen=settings') > -1) {
            // Add sangu to the menu
            //$("#content_value table.vis:first").append("<tr><td>&nbsp;</td></tr><tr><th><a href='" + getUrlString("screen=settings&mode=sangu") + "'>Sangu</a></th></tr>");

            if (location.href.indexOf('mode=vacation') > -1) {
                // VACATION MODE
                //<!--@@INCLUDE "\page\settings\vacationmode.js" INDENT=4 //-->
            }
			else if (location.href.indexOf('mode=quickbar_edit') > -1) {
				// EDIT/ADD TO QUICKBAR
				//<!--@@INCLUDE "\page\settings\quickbar.js" INDENT=4 //-->
			}
            else if (location.href.indexOf('mode=sangu') > -1) {
				// SANGU SCREEN
				//<!--@@INCLUDE "\page\settings\sangu.js" INDENT=4 //-->
            }
        }
		
		
		
		// ALL OVERVIEW PAGES
        else if (location.href.indexOf('screen=overview_villages') > -1) {
            //<!--@@INCLUDE "\page\overview_villages\allpages_groups.js" INDENT=3 //-->

			// PRODUCTION OVERVIEW
            if (location.href.indexOf('mode=prod') > -1) {
                //<!--@@INCLUDE "\page\overview_villages\production.js" INDENT=3 //-->
            }
			// TROOPS OVERVIEW
            else if (location.href.indexOf('mode=units') > -1
						&& (location.href.indexOf('type=own_home') > -1 || location.href.indexOf('type=there') > -1)) {
                //<!--@@INCLUDE "\page\overview_villages\units_there_ownhome.js" INDENT=3 //-->
            }
			// BUILDINGS OVERVIEW
            else if (location.href.indexOf('mode=buildings') > -1) {
                //<!--@@INCLUDE "\page\overview_villages\buildings.js" INDENT=3 //-->
            }
			// TECHS OVERVIEW // SMEDERIJ OVERVIEW // SMITHY OVERVIEW
            else if (location.href.indexOf('mode=tech') > -1) {
                //<!--@@INCLUDE "\page\overview_villages\techs.js" INDENT=3 //-->
            }
			// GROUPS OVERVIEW
            else if (location.href.indexOf('mode=groups') > -1) {
                //<!--@@INCLUDE "\page\overview_villages\groups.js" INDENT=3 //-->
            }
			 // SUPPORT OVERVIEW
            else if (location.href.indexOf('type=support_detail') > -1 || location.href.indexOf('type=away_detail') > -1) {
                //<!--@@INCLUDE "\page\overview_villages\support_detail.js" INDENT=3 //-->
            }
			// COMMANDS OVERVIEW
            else if (location.href.indexOf('mode=commands') > -1) {
                //<!--@@INCLUDE "\page\overview_villages\commands.js" INDENT=3 //-->
            }
			// INCOMINGS OVERVIEW
            else if (location.href.indexOf('mode=incomings') > -1) {
                //<!--@@INCLUDE "\page\overview_villages\incomings.js" INDENT=3 //-->
            }
        }







		// RALLYPOINT PLACE
        else if (location.href.indexOf('screen=place') > -1) {
			// RALLYPOINT CONFIRM
			if ($("#attack_name").size() > 0) {
				//<!--@@INCLUDE "\page\place\confirm.js" INDENT=3 //-->
			}
			// RALLYPOINT UNITS THERE
			else if (location.href.indexOf('mode=units') > -1 && location.href.indexOf('try=back') == -1) {
				//<!--@@INCLUDE "\page\place\units_back.js" INDENT=3 //-->
			}
			// RALLY POINT (DEFAULT)
			else {
				//<!--@@INCLUDE "\page\place\place.js" INDENT=3 //-->
			}
        }

        //<!--@@INCLUDE "\page\global.js" INDENT=2 //-->
    }
};

//<!--@@INCLUDE "\greasemonkey\inject.js" INDENT=0 //-->
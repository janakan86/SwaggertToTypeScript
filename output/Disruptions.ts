export interface Disruptions{
   disruptions :   {
      "general" : 
      [
            {
               "routes" : 
               [
                     {
                        "direction" : 
                           {
                              "route_direction_id": "number",
                              "direction_id": "number",
                              "direction_name": "string",
                              "service_time": "string"
                           }
                           "route_type": "number",
                           "route_id": "number",
                           "route_name": "string",
                           "route_number": "string",
                           "route_gtfs_id": "string"
                     }
               ]
               "disruption_id": "number",
               "title": "string",
               "url": "string",
               "description": "string",
               "disruption_status": "string",
               "disruption_type": "string",
               "published_on": "string",
               "last_updated": "string",
               "from_date": "string",
               "to_date": "string"
            }
      ],
      "metro_train" : 
      [
            {
               "routes" : 
               [
                     {
                        "direction" : 
                           {
                              "route_direction_id": "number",
                              "direction_id": "number",
                              "direction_name": "string",
                              "service_time": "string"
                           }
                           "route_type": "number",
                           "route_id": "number",
                           "route_name": "string",
                           "route_number": "string",
                           "route_gtfs_id": "string"
                     }
               ]
               "disruption_id": "number",
               "title": "string",
               "url": "string",
               "description": "string",
               "disruption_status": "string",
               "disruption_type": "string",
               "published_on": "string",
               "last_updated": "string",
               "from_date": "string",
               "to_date": "string"
            }
      ],
      "metro_tram" : 
      [
            {
               "routes" : 
               [
                     {
                        "direction" : 
                           {
                              "route_direction_id": "number",
                              "direction_id": "number",
                              "direction_name": "string",
                              "service_time": "string"
                           }
                           "route_type": "number",
                           "route_id": "number",
                           "route_name": "string",
                           "route_number": "string",
                           "route_gtfs_id": "string"
                     }
               ]
               "disruption_id": "number",
               "title": "string",
               "url": "string",
               "description": "string",
               "disruption_status": "string",
               "disruption_type": "string",
               "published_on": "string",
               "last_updated": "string",
               "from_date": "string",
               "to_date": "string"
            }
      ],
      "metro_bus" : 
      [
            {
               "routes" : 
               [
                     {
                        "direction" : 
                           {
                              "route_direction_id": "number",
                              "direction_id": "number",
                              "direction_name": "string",
                              "service_time": "string"
                           }
                           "route_type": "number",
                           "route_id": "number",
                           "route_name": "string",
                           "route_number": "string",
                           "route_gtfs_id": "string"
                     }
               ]
               "disruption_id": "number",
               "title": "string",
               "url": "string",
               "description": "string",
               "disruption_status": "string",
               "disruption_type": "string",
               "published_on": "string",
               "last_updated": "string",
               "from_date": "string",
               "to_date": "string"
            }
      ],
      "regional_train" : 
      [
            {
               "routes" : 
               [
                     {
                        "direction" : 
                           {
                              "route_direction_id": "number",
                              "direction_id": "number",
                              "direction_name": "string",
                              "service_time": "string"
                           }
                           "route_type": "number",
                           "route_id": "number",
                           "route_name": "string",
                           "route_number": "string",
                           "route_gtfs_id": "string"
                     }
               ]
               "disruption_id": "number",
               "title": "string",
               "url": "string",
               "description": "string",
               "disruption_status": "string",
               "disruption_type": "string",
               "published_on": "string",
               "last_updated": "string",
               "from_date": "string",
               "to_date": "string"
            }
      ],
      "regional_coach" : 
      [
            {
               "routes" : 
               [
                     {
                        "direction" : 
                           {
                              "route_direction_id": "number",
                              "direction_id": "number",
                              "direction_name": "string",
                              "service_time": "string"
                           }
                           "route_type": "number",
                           "route_id": "number",
                           "route_name": "string",
                           "route_number": "string",
                           "route_gtfs_id": "string"
                     }
               ]
               "disruption_id": "number",
               "title": "string",
               "url": "string",
               "description": "string",
               "disruption_status": "string",
               "disruption_type": "string",
               "published_on": "string",
               "last_updated": "string",
               "from_date": "string",
               "to_date": "string"
            }
      ],
      "regional_bus" : 
      [
            {
               "routes" : 
               [
                     {
                        "direction" : 
                           {
                              "route_direction_id": "number",
                              "direction_id": "number",
                              "direction_name": "string",
                              "service_time": "string"
                           }
                           "route_type": "number",
                           "route_id": "number",
                           "route_name": "string",
                           "route_number": "string",
                           "route_gtfs_id": "string"
                     }
               ]
               "disruption_id": "number",
               "title": "string",
               "url": "string",
               "description": "string",
               "disruption_status": "string",
               "disruption_type": "string",
               "published_on": "string",
               "last_updated": "string",
               "from_date": "string",
               "to_date": "string"
            }
      ]
   };
 
   status :   {
      "version": "string",
      "health": "number"
   };
 
}
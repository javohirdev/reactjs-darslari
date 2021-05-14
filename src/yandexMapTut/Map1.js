import React from 'react';
import { YMaps, Map, Placemark, GeoObject, FullscreenControl, GeolocationControl, TrafficControl, ZoomControl } from 'react-yandex-maps';

const Map1 = () => {
    return (      
        <YMaps>
            <div>
                <Map
                    defaultState={{
                        center: [41.387315, 69.463040],
                        zoom: 6,
                    }}
                >
                    <Placemark geometry={[41.387315, 69.463040]} />

                    <FullscreenControl options={{ float: 'left' }} />

                    <GeolocationControl options={{ float: 'right' }} />

                    <TrafficControl options={{ float: 'right' }} />

                    <ZoomControl options={{ float: 'left' }} />
                </Map>

                {/* <Map
                    defaultState={{
                        center: [41.109919, 69.713426],
                        zoom: 3,
                    }}
                >

                    <GeoObject 
                        geometry={{
                            type: 'LineString',
                            coordinates: [
                                [41.387315, 69.463040],
                                [41.472654, 69.581227],
                            ],
                        }}
                        options={{
                            geodesic: true,
                            strokeWidth: 6,
                            strokeColor: '#000000',
                        }}
                    />
                </Map> */}
            </div>
        </YMaps>
    );
};

export default Map1;
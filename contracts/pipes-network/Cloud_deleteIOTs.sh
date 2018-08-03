#!/bin/bash
#
#

jq --version > /dev/null 2>&1
if [ $? -ne 0 ]; then
	echo "Please Install 'jq' https://stedolan.github.io/jq/ to execute this script"
	echo
	exit 1
fi
starttime=$(date +%s)


curl -X GET --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings'



echo
echo

echo "Deletting IOT1"
curl -X DELETE --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings/IOT1'

echo
echo
echo "Deletting IOT2"
curl -X DELETE --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings/IOT2'

echo
echo
echo "Deletting IOT3"
curl -X DELETE --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings/IOT3'
echo
echo
echo
echo "Deletting IOT4"
curl -X DELETE --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings/IOT4'
echo
echo
echo
echo "Deletting IOT5"
curl -X DELETE --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings/IOT5'
echo
echo
echo
echo "Deletting IOT6"
curl -X DELETE --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings/IOT6'
echo
echo
echo
echo "Deletting IOT7"
curl -X DELETE --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings/IOT7'
echo
echo
echo
echo "Deletting IOT8"
curl -X DELETE --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings/IOT8'
echo
echo "Deletting IOT9"
curl -X DELETE --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings/IOT9'
echo
echo "Deletting IOT10"
curl -X DELETE --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings/IOT10'
echo
sleep 1

echo "List of IoTs"
curl -X GET --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings'

echo "Total execution time : $(($(date +%s)-starttime)) secs ..."

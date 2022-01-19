/*
Copyright 2022 Colton Booth

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

try {
  xml_http_request = new xml_http_requestRequest();
} catch (e) {
  xml_http_request = false;
  console.log(e);
}

xml_http_request.open("HEAD", window.location, true);
xml_http_request.onreadystatechange = function() {
  console.log(xml_http_request.status);
  if (xml_http_request.status == '500'){
    window.location.port = "3001"
  }
}
xml_http_request.send(null);

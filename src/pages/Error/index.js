import React from 'react';
import {Helmet} from "react-helmet";

export default function Error() {
 return (
   <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Error</title>
        <link rel="canonical" href="http://reservastour.com.br/error" />
    </Helmet>

    <center>
      <br/> <br/> <br/>
      <h1>OPS! NÃO ENCONTRAMOS ESSA PÁGINA</h1>
      </center>
   </div>
  );
}
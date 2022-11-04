function parseURL(url='')
{
	if(!url){url = document.URL;}
    var parser = document.createElement('a'),
        searchObject = {},
        queries, split, i;
    parser.href = url;
    queries = parser.search.replace(/^\?/, '').split('&');
    for( i = 0; i < queries.length; i++ ) {
        split = queries[i].split('=');
        searchObject[split[0]] = split[1];
    }
    return {
        protocol: parser.protocol,
		origin: parser.origin,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        patharray: parser.pathname.slice(1).split('/'),
        search: parser.search,
        searchObject: searchObject,
        hash: parser.hash
    };
}

function toCdn() {
	var gitArr = parseURL().patharray;
	var user = gitArr[0];
	var repo = gitArr[1];
	var fork = gitArr[3];
	var path = gitArr.slice(4).join('/');
	var cdn = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${fork}/${path}`;
	console.log(cdn);
	window.location.href = cdn;
}

toCdn();

# Link component -> wrapper for <a> tag

<Link to='/path'>HOme</Link> --> React
<Link href="/path">Home</Link> --> NextJs

# client component and server components

# Server Component

server components runs only on browser and sends html directly to the browser it do not run in browser
by default : all layouts and pages are server componenet
we cannot use event handler in server components like "onClick" etc
we need to use client components for that

$$
What happens internally?

User requests page->Server runs this component->HTML is generated->HTML sent to browser->Browser just displays it->No heavy JS is sent.

$$ What Server Components CAN do---

 Fetch data directly from database

 Call backend APIs

 Use async/await

 Access server environment variables

 Keep secrets secure api keys token etc

 What Server Components CANNOT do--

❌ useState
❌ useEffect
❌ onClick handlers
❌ Browser APIs (window, localStorage)
Because they never run in the browser.

# client component

A Client Component runs in the browser.

You must explicitly enable itby :"use client"

 "use client" -> to make client componenet
 client componenet cannot be async only server cpomponent can be async at the moment
now we can use all hooks event handlers just like we use in React

$$ What happens internally?

Server sends HTML->JS bundle is downloaded->React hydrates the page->Now it becomes interactive

$$ What Client Components CAN do

* useState

* useEffect

* Event handlers

* Access browser APIs

* Create interactive UI

#  why next js provide server compoonent
React -> every thing runs in the browser-> heavy js -> slow performance

# routing in next js 

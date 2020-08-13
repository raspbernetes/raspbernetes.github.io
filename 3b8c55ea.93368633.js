(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(9),r=(n(0),n(172)),s={id:"installation",title:"Installation"},l={id:"installation",title:"Installation",description:"This guide will walk through the steps required to bootstrap a running Kubernetes cluster with a highly available topology.",source:"@site/docs/installation.md",permalink:"/docs/installation",editUrl:"https://github.com/raspbernetes/docs/edit/master/website/docs/installation.md",sidebar:"someSidebar",previous:{title:"Contributing",permalink:"/docs/contributing"},next:{title:"Remote Kubectl Access",permalink:"/docs/remote_kubectl_access"}},i=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setup Operating System",id:"setup-operating-system",children:[]},{value:"Configure Cloud Init",id:"configure-cloud-init",children:[]},{value:"Flash SD Cards",id:"flash-sd-cards",children:[]},{value:"Configure Nodes",id:"configure-nodes",children:[]}],c={rightToc:i};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This guide will walk through the steps required to bootstrap a running Kubernetes cluster with a highly available topology."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"Prior to getting started you will need to install the following tools on your machine:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html"}),"Ansible")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/hypriot/flash#installation"}),"Flash")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"}),"kubectl"))),Object(r.b)("p",null,"Clone the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/raspbernetes/k8s-cluster-installation.git"}),"k8s-cluster-installation")," repository.\nYou will need to run these steps from that location."),Object(r.b)("h2",{id:"setup-operating-system"},"Setup Operating System"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you wish to use the Raspbian Lite OS please use the following ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/raspbernetes/k8s-cluster-installation/blob/master/raspbian/README.md"}),"guide"),"."))),Object(r.b)("h2",{id:"configure-cloud-init"},"Configure Cloud Init"),Object(r.b)("p",null,"Open ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/raspbernetes/k8s-cluster-installation/blob/master/setup/cloud-config.yml"}),"cloud-config"),", you need to change a few fields that will be used to flash for for your Raspberry Pi in this file."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"hostname: k8s-master-01\n")),Object(r.b)("p",null,"This will be the hostname for your nodes, make sure you change names for your different nodes and note them down."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"users:\n    ssh_authorized_keys:\n      - ''\n")),Object(r.b)("p",null,"Put the ssh key of your local machine that you want to access the nodes, so you can ssh to them."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"write_files:\n  - path: /etc/netplan/50-cloud-init.yaml\n    permissions: '0644'\n    content: |\n      network:\n        version: 2\n        ethernets:\n          eth0:\n            addresses:\n              - 192.168.1.121/24  # change to your RPi's ip address\n            gateway4: 192.168.1.1 # change to your gateway address\n            nameservers:\n              addresses:\n                - 1.1.1.1\n                - 8.8.8.8\n")),Object(r.b)("p",null,"You also need to change the addresses to your RPi's ip address and gateway4 to your gateway's address."),Object(r.b)("h2",{id:"flash-sd-cards"},"Flash SD Cards"),Object(r.b)("h4",{id:"downloads-the-flash-tool"},"Downloads the Flash tool"),Object(r.b)("p",null,"If you haven't install ",Object(r.b)("inlineCode",{parentName:"p"},"flash"),", you can run below command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'sudo curl -L "https://github.com/hypriot/flash/releases/download/2.5.0/flash" -o /usr/local/bin/flash\nsudo chmod +x /usr/local/bin/flash\n')),Object(r.b)("h4",{id:"download-and-extract-the-image"},"Download and extract the image"),Object(r.b)("p",null,"Follow the following command to download ",Object(r.b)("inlineCode",{parentName:"p"},"ubuntu-20.04")," image and extract it."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -L "http://cdimage.ubuntu.com/releases/focal/release/ubuntu-20.04-preinstalled-server-arm64+raspi.img.xz" -o ~/Downloads/ubuntu-20.04-preinstalled-server-arm64+raspi.img.xz\nunxz -T 0 ~/Downloads/ubuntu-20.04-preinstalled-server-arm64+raspi.img.xz\n')),Object(r.b)("h4",{id:"flash"},"Flash"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"flash \\\n    --userdata setup/cloud-config.yml \\\n    ~/Downloads/ubuntu-20.04-preinstalled-server-arm64+raspi.img\n")),Object(r.b)("h4",{id:"boot"},"Boot"),Object(r.b)("p",null,"Place the SD Card in your RPi and give the system approx ~10 minutes to boot before trying to SSH."),Object(r.b)("h2",{id:"configure-nodes"},"Configure Nodes"),Object(r.b)("p",null,"Once the Raspberry Pi's are running and all the prerequisites have been completed we're now ready to setup the Ansible inventory."),Object(r.b)("p",null,"Open the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/raspbernetes/k8s-cluster-installation/blob/master/ansible/inventory"}),"inventory file")," - each machine that will be joining the Kubernetes cluster must be defined as either a master or worker node. To leverage the highly available topology configuration you would ideally have 3 masters available as a minimum, otherwise 1 master node is fine, however, it won't be highly available."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Ensure the ",Object(r.b)("inlineCode",{parentName:"p"},"hostname")," matches what the machine was given when flashed the SD card and ",Object(r.b)("inlineCode",{parentName:"p"},"ansible_host")," matches the IP allocated to the host on your preferred subnet.")),Object(r.b)("p",null,"When the inventory has been configured with all the hosts that will be joining the Kubernetes cluster we can run the following command to verify SSH connectivity can be established."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ansible all -m ping -i ansible/inventory -u pi\n")),Object(r.b)("p",null,"A successful response should look something like the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),'k8s-worker-01 | SUCCESS => {\n  ...\n  "changed": false,\n  "ping": "pong"\n  ...\n}\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: If your output returns success for each ping then you can continue, otherwise there may be some misconfiguration of either the inventory file, or network connectivity issues.")),Object(r.b)("p",null,"There are a variety of different configurable options in the Ansible automation. These options can be located in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/raspbernetes/k8s-cluster-installation/blob/master/ansible/vars.yml"}),"vars.yml")," file, please read ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced_installation"}),"Advanced installation")," for more information."),Object(r.b)("p",null,"Assuming all previous steps and configuration are correct the last thing to do is to execute the playbook. The playbook that should be used is the ",Object(r.b)("inlineCode",{parentName:"p"},"k8s-all.yml")," playbook, this will handle all the master and worker node logic and sequencing."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"env ANSIBLE_CONFIG=ansible/ansible.cfg ansible-playbook \\\n    -i ansible/inventory \\\n    ansible/playbooks/k8s-all.yml\n")),Object(r.b)("p",null,"If there was no errors you should be able to execute the following command to check the status of the nodes in the cluster:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"k get nodes --kubeconfig ansible/playbooks/output/k8s-config.yaml\n")),Object(r.b)("p",null,"Output:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"NAME            STATUS     ROLES    AGE     VERSION\nk8s-master-01   Ready      master   4m45s   v1.17.4\nk8s-master-02   Ready      master   70s     v1.17.4\nk8s-master-03   Ready      master   79s     v1.17.4\nk8s-worker-01   Ready      <none>   16s     v1.17.4\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Congratulations!")," you have successfully started your own Kubernetes cluster!"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you weren't lucky enough to have everything successful on the first attempt please open an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/raspbernetes/k8s-cluster-installation/issues/new"}),"issue")," with as much context and we'll try to solve and improve for future people.")))}b.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=b(n),h=a,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?o.a.createElement(d,l(l({ref:t},c),{},{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
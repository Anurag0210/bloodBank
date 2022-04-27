
// api url
const api_url =
	"http://127.0.0.1:5000/getData";

async function getapi(url) {
	const response = await fetch(url);

	var data = await response.json();
	bbdata = {}
	for (var i = 0; i < Object.keys(data).length; i++) {
		bbdata[data[i].BloodBankId] = data[i];
	}
	console.log(bbdata);
	show(bbdata);
}
getapi(api_url);

function show(data) {
	let tab = '';
	for (var i in data) {
		tab += `
            <div class="accordion-item bg-danger">
                <h2 class="accordion-header" id="heading${i}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                        Blood Bank ID: ${data[i].BloodBankId}
                    </button>
                </h2>
                <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="accordion" id="accordion${i}">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingAPos">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseAPos" aria-expanded="false" aria-controls="collapseAPos">
                                       No. of Blood Bags for Type A+:
                                    </button>
                                </h2>
                                <div id="collapseAPos" class="accordion-collapse collapse"
                                    aria-labelledby="headingAPos" data-bs-parent="#accordion${i}">
                                     ${data[i].Type_APos > 5 ?
				`<div class="accordion-body bg-success bg-opacity-25">
					${data[i].Type_APos}
				</div>`
				:
				data[i].Type_APos > 2 ?
					`<div class="accordion-body bg-warning bg-opacity-25">
					${data[i].Type_APos}
				</div>`
					:
					`<div class="accordion-body bg-danger bg-opacity-25">
					${data[i].Type_APos}
				</div>`
			}
			
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingANeg">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseANeg"
                                        aria-expanded="false" aria-controls="collapseANeg">
                                        No. of Blood Bags for Type A-:
                                    </button>
                                </h2>
                                <div id="collapseANeg" class="accordion-collapse collapse" aria-labelledby="headingANeg"
                                    data-bs-parent="#accordion${i}">
                                        ${data[i].Type_ANeg > 5 ?
				`<div class="accordion-body bg-success bg-opacity-25">
					${data[i].Type_ANeg}
				</div>`
				:
				data[i].Type_ANeg > 2 ?
					`<div class="accordion-body bg-warning bg-opacity-25">
					${data[i].Type_ANeg}
				</div>`
					:
					`<div class="accordion-body bg-danger bg-opacity-25">
					${data[i].Type_ANeg}
				</div>`
			}
                                </div>
                            </div>
							<div class="accordion-item">
                                <h2 class="accordion-header" id="headingBPos">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseBPos" aria-expanded="false" aria-controls="collapseBPos">
                                        No. of Blood Bags for Type B+:
                                    </button>
                                </h2>
                                <div id="collapseBPos" class="accordion-collapse collapse"
                                    aria-labelledby="headingBPos" data-bs-parent="#accordion${i}">
                                        ${data[i].Type_BPos > 5 ?
				`<div class="accordion-body bg-success bg-opacity-25">
					${data[i].Type_BPos}
				</div>`
				:
				data[i].Type_BPos > 2 ?
					`<div class="accordion-body bg-warning bg-opacity-25">
					${data[i].Type_BPos}
				</div>`
					:
					`<div class="accordion-body bg-danger bg-opacity-25">
					${data[i].Type_BPos}
				</div>`
			}
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingBNeg">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBNeg"
                                        aria-expanded="false" aria-controls="collapseBNeg">
                                        No. of Blood Bags for Type B-:
                                    </button>
                                </h2>
                                <div id="collapseBNeg" class="accordion-collapse collapse" aria-labelledby="headingBNeg"
                                    data-bs-parent="#accordion${i}">
                                        ${data[i].Type_BNeg > 5 ?
				`<div class="accordion-body bg-success bg-opacity-25">
					${data[i].Type_BNeg}
				</div>`
				:
				data[i].Type_BNeg > 2 ?
					`<div class="accordion-body bg-warning bg-opacity-25">
					${data[i].Type_BNeg}
				</div>`
					:
					`<div class="accordion-body bg-danger bg-opacity-25">
					${data[i].Type_BNeg}
				</div>`
			}
                                </div>
                            </div>
							<div class="accordion-item">
                                <h2 class="accordion-header" id="headingABPos">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseABPos" aria-expanded="false" aria-controls="collapseABPos">
                                        No. of Blood Bags for Type AB+:
                                    </button>
                                </h2>
                                <div id="collapseABPos" class="accordion-collapse collapse"
                                    aria-labelledby="headingABPos" data-bs-parent="#accordion${i}">
                                        ${data[i].Type_ABPos > 5 ?
				`<div class="accordion-body bg-success bg-opacity-25">
					${data[i].Type_ABPos}
				</div>`
				:
				data[i].Type_ABPos > 2 ?
					`<div class="accordion-body bg-warning bg-opacity-25">
					${data[i].Type_ABPos}
				</div>`
					:
					`<div class="accordion-body bg-danger bg-opacity-25">
					${data[i].Type_ABPos}
				</div>`
			}
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingABNeg">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseABNeg"
                                        aria-expanded="false" aria-controls="collapseABNeg">
                                        No. of Blood Bags for Type AB-:
                                    </button>
                                </h2>
                                <div id="collapseABNeg" class="accordion-collapse collapse" aria-labelledby="headingABNeg"
                                    data-bs-parent="#accordion${i}">
                                        ${data[i].Type_ABNeg > 5 ?
				`<div class="accordion-body bg-success bg-opacity-25">
					${data[i].Type_ABNeg}
				</div>`
				:
				data[i].Type_ABNeg > 2 ?
					`<div class="accordion-body bg-warning bg-opacity-25">
					${data[i].Type_ABNeg}
				</div>`
					:
					`<div class="accordion-body bg-danger bg-opacity-25">
					${data[i].Type_ABNeg}
				</div>`
			}
                                </div>
                            </div>
							<div class="accordion-item">
                                <h2 class="accordion-header" id="headingOPos">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOPos" aria-expanded="false" aria-controls="collapseOPos">
                                        No. of Blood Bags for Type O+:
                                    </button>
                                </h2>
                                <div id="collapseOPos" class="accordion-collapse collapse"
                                    aria-labelledby="headingOPos" data-bs-parent="#accordion${i}">
                                        ${data[i].Type_OPos > 5 ?
				`<div class="accordion-body bg-success bg-opacity-25">
					${data[i].Type_OPos}
				</div>`
				:
				data[i].Type_OPos > 2 ?
					`<div class="accordion-body bg-warning bg-opacity-25">
					${data[i].Type_OPos}
				</div>`
					:
					`<div class="accordion-body bg-danger bg-opacity-25">
					${data[i].Type_OPos}
				</div>`
			}
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingONeg">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseONeg"
                                        aria-expanded="false" aria-controls="collapseONeg">
                                        No. of Blood Bags for Type O-:
                                    </button>
                                </h2>
                                <div id="collapseONeg" class="accordion-collapse collapse" aria-labelledby="headingONeg"
                                    data-bs-parent="#accordion${i}">
                                        ${data[i].Type_ONeg > 5 ?
				`<div class="accordion-body bg-success bg-opacity-25">
					${data[i].Type_ONeg}
				</div>`
				:
				data[i].Type_ONeg > 2 ?
					`<div class="accordion-body bg-warning bg-opacity-25">
					${data[i].Type_ONeg}
				</div>`
					:
					`<div class="accordion-body bg-danger bg-opacity-25">
					${data[i].Type_ONeg}
				</div>`
			}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
	}
	document.getElementById("accordionExample").innerHTML = tab;
}

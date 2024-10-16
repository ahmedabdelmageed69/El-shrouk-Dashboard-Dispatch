

// Selectbox in Navbar
const navbarSelectbox = document.getElementById('navbar_selectbox');
const navbarSelectboxInner = document.getElementById('navbar_selectbox_inner');

navbarSelectbox.addEventListener('click', function () {
    if (navbarSelectboxInner.classList.contains("hidden")) {
        navbarSelectboxInner.classList.remove('hidden');
        navbarSelectboxInner.classList.add('flex');

    } else {
        navbarSelectboxInner.classList.remove('flex');
        navbarSelectboxInner.classList.add('hidden');
    }
});

// Close the select box when clicking outside
document.addEventListener('click', function (event) {
    if (!navbarSelectbox.contains(event.target) && !navbarSelectboxInner.contains(event.target)) {
        navbarSelectboxInner.classList.remove('flex');
        navbarSelectboxInner.classList.add('hidden');
    }
});

// ------------------------------------------------------------------------------------------------

// Logout
const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener("click", function () {
    window.location.href = "login.html";
})

// ------------------------------------------------------------------------------------------------

// Sidebar
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar_toggle');
const sidebarPageTitle = document.querySelectorAll("#sidebar .sidebar_page_title");
const sidebarLogo = document.querySelector("#sidebar .sidebar_logo")
const sidebarPageItem = document.querySelectorAll("#sidebar .sidebar_page_item");


// sidebarToggle.addEventListener("click", function () {
//     console.log("sidebar.children", sidebar.children);

//     if (sidebar.classList.contains('w-[260px]')) {
//         sidebar.classList.add('w-[20px]');
//         sidebar.classList.remove('w-[260px]');
//         Array.from(sidebar.children).forEach(child => {
//             child.classList.add("p-1");
//             child.classList.remove("p-6");
//         });

//     } else {
//         sidebar.classList.remove('w-[20px]');
//         sidebar.classList.add('w-[260px]');


//         Array.from(sidebar.children).forEach(child => {
//             child.classList.add("p-6");
//             child.classList.remove("p-1");
//         });

//     }
// });

// sidebar operators
const sidebarOperators = document.getElementById('sidebar_operators');
const sidebarOperatorsItems = document.getElementById('sidebar_operators_list');

sidebarOperators.addEventListener("click", function () {
    if (sidebarOperatorsItems.classList.contains('hidden')) {
        sidebarOperatorsItems.classList.remove('hidden');
        sidebarOperatorsItems.classList.add('flex');
        sidebarCloseStyles()
    } else {
        sidebarOperatorsItems.classList.remove('flex');
        sidebarOperatorsItems.classList.add('hidden');
    }
});

const sidebarOpenStyles = () => {
    sidebarLogo.classList.add("hidden")
    // sidebar.classList.add('max-w-[60px]');
    sidebar.classList.remove('lg:w-[260px]');
    sidebar.classList.add('lg:w-[60px]');
    // sidebar.firstChild.nextElementSibling.classList.remove("p-6");
    // sidebar.firstChild.nextElementSibling.classList.add("p-2");
    sidebarPageTitle.forEach((item) => item.classList.add("hidden"));

    sidebarOperatorsItems.classList.add("hidden")

    sidebarPageItem.forEach((i) => i.classList.add("justify-center"))
    sidebarPageItem.forEach((i) => i.classList.remove("justify-start"))

    sidebar.firstChild.nextElementSibling.classList.remove("p-6");
    sidebar.firstChild.nextElementSibling.classList.add("p-3");
}

const sidebarCloseStyles = () => {
    sidebarLogo.classList.remove("hidden")

    // Expand sidebar
    sidebar.classList.add('lg:w-[260px]');
    sidebar.classList.remove('lg:w-[60px]');

    // sidebarPageItem.classList.add("justify-start");
    // sidebarPageItem.classList.remove("justify-center");
    // sidebar.classList.remove('max-w-[60px]');

    sidebarPageTitle.forEach((item) => item.classList.remove("hidden"));

    sidebarPageItem.forEach((i) => i.classList.remove("justify-center"))
    sidebarPageItem.forEach((i) => i.classList.add("justify-start"))

    sidebar.firstChild.nextElementSibling.classList.add("p-6");
    sidebar.firstChild.nextElementSibling.classList.remove("p-3");

}

function openSidebarInMobile() {
    sidebar.classList.add('w-[260px]');

    sidebar.classList.remove('sticky');
    sidebar.style.left = "0"
    // sidebar.classList.add('left-full');
}
function closeSidebarInMobile() {
    sidebar.classList.remove('left-0');
    // sidebar.classList.add('left-full');
    sidebar.style.left = "-100%"

    // sidebar.classList.add('left-full');
}

sidebarToggle.addEventListener("click", function () {
    if (sidebar.classList.contains('lg:w-[260px]')) {
        sidebarOpenStyles()
    } else {
        sidebarCloseStyles()
    }
});

// ------------------------------------------------------------------------------------------------

// Select all custom select boxes
document.querySelectorAll('.custom-select').forEach((selectBox) => {
    const selectButton = selectBox.querySelector('.select-button');
    const selectOptions = selectBox.querySelector('.select-options');
    const selectedOption = selectBox.querySelector('.selected-option');

    // Toggle dropdown visibility on button click
    selectButton.addEventListener('click', (event) => {
        // Hide other select boxes' options
        document.querySelectorAll('.select-options').forEach((options) => {
            if (options !== selectOptions) {
                options.classList.add('hidden');
            }
        });
        selectOptions.classList.toggle('hidden');
        event.stopPropagation(); // Prevent immediate close from document click
    });

    // Select an option and update the button text
    selectOptions.querySelectorAll('li').forEach((option) => {
        option.addEventListener('click', () => {
            selectedOption.textContent = option.textContent;
            selectOptions.classList.add('hidden');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!selectBox.contains(event.target)) {
            selectOptions.classList.add('hidden');
        }
    });
});

// ------------------------------------------------------------------------------------------------
// Filter in Orders page

const filterBtn = document.getElementById("filter-btn");
const filterIcon = document.getElementById("filter-icon");
const filterBody = document.getElementById("filter-body");
const filterBodyInner = document.getElementById("filter-body-inner");

if (filterBtn) {
    filterBtn.addEventListener('click', function () {
        filterIcon.classList.toggle("rotate-90")
        // filterBody.classList.toggle("h-full")

        if (filterBody.classList.contains("h-16")) {
            filterBody.classList.remove("h-16")
            filterBodyInner.classList.remove("hidden")
            filterBodyInner.classList.add("grid")
            filterBody.classList.add("min-h-[400px]")
        } else {
            filterBody.classList.add("h-16")
            filterBodyInner.classList.add("hidden")

            filterBody.classList.remove("min-h-[400px]")
        }
        // filterBody.classList.toggle('hidden');
    });

}

// ------------------------------------------------------------------------------------------------
// Permits

const addNewPermitsBtn = document.getElementById("permits-btn");
const permitsModalOverlay = document.getElementById("permits-modal-overlay");
const permitsModal = document.getElementById("permits-modal");

if (addNewPermitsBtn) {
    addNewPermitsBtn.addEventListener("click", () => {
        if (permitsModalOverlay.classList.contains("hidden")) {
            permitsModalOverlay.classList.add("flex")
            permitsModalOverlay.classList.remove("hidden")
        } else {
            permitsModalOverlay.classList.remove("flex")
            permitsModalOverlay.classList.add("hidden")
        }
    })

}

function closePermitsModal() {
    permitsModalOverlay.classList.add("hidden");
    permitsModalOverlay.classList.remove("flex")
}


// ------------------------------------------------------------------------------------------------

// Steper

// const steps = [1, 2, 3];
// let stepCounter = 1;

// const continueBtn = document.querySelector("main #continue-btn");

// console.log("continueBtn :", continueBtn)

// continueBtn.addEventListener("click", () => {
//     renderStep(stepCounter);
//     if (stepCounter < steps.length) {
//         stepCounter++;
//     } 
// });


// function renderStep(currentStep) {
//     steps.forEach((item) => {
//         if (item === currentStep) {
//             // Show the current step and hide the inactive step elements
//             document.getElementById('step-' + item).classList.remove('hidden');
//             document.getElementById('number-step-' + item).classList.add('hidden');
//             document.getElementById('active-step-' + item)?.classList.remove('hidden'); // Optional chaining for elements that might not exist
//             document.getElementById('active-step-' + item).parentElement.classList.add('border-mainColor');
//             if(currentStep > 2) {
//                 document.getElementById("divider-2").classList.remove('bg-gray15');

//                 document.getElementById("divider-2").classList.add('bg-mainColor');

//             }
            
//         } else {
//             // Hide the other steps and show their inactive step elements
//             document.getElementById('step-' + item).classList.add('hidden');
//             // document.getElementById('number-step-' + item).classList.remove('hidden');
//             // document.getElementById('active-step-' + item)?.classList.add('hidden');
//         }
//     });
// }

const steps = [1, 2, 3];
let stepCounter = 1;

const continueBtn = document.querySelector("main #continue-btn");

// Set the initial step based on the URL
window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const step = parseInt(urlParams.get("step"), 10);

    // Check if the step from the URL is valid, otherwise default to stepCounter
    if (steps.includes(step)) {
        stepCounter = step;
    }
    renderStep(stepCounter);
});

if (continueBtn) {
    continueBtn.addEventListener("click", () => {
        renderStep(stepCounter);
        updateUrl(stepCounter);

        // Update stepCounter for the next click
        if (stepCounter < steps.length) {
            stepCounter++;
        }
    });
}


function renderStep(currentStep) {
    steps.forEach((item) => {
        if (currentStep >= 1) {
            document.getElementById('step-1')?.classList.remove('hidden');
            document.getElementById('number-step-1')?.classList.add('hidden');
            document.getElementById('active-step-1')?.classList.remove('hidden');

            document.getElementById('step-2')?.classList.add('hidden')
            document.getElementById('step-3')?.classList.add('hidden')
        }

        if (currentStep >= 2) {
            document.getElementById('step-2').classList.remove('hidden');
            document.getElementById('number-step-2').classList.add('hidden');
            document.getElementById('active-step-2')?.classList.remove('hidden');
            document.getElementById('number-step-2').parentElement.classList.add('border-mainColor');
            document.getElementById('number-step-2').parentElement.nextElementSibling.classList.remove('text-blue3');
            document.getElementById('number-step-2').parentElement.nextElementSibling.classList.add('text-mainColor');

            document.getElementById('step-1').classList.add('hidden')
            document.getElementById('step-3').classList.add('hidden')
        }

        if (currentStep === 3) {
            document.getElementById('step-3').classList.remove('hidden');
            document.getElementById('number-step-3').classList.add('hidden');
            document.getElementById('number-step-3').parentElement.classList.add('border-mainColor');
            document.getElementById('active-step-3')?.classList.remove('hidden');
            document.getElementById('divider-2').classList.add('bg-mainColor');
            document.getElementById('divider-2').classList.remove('bg-gray15');
            document.getElementById('number-step-3').parentElement.nextElementSibling.classList.remove('text-blue3');
            document.getElementById('number-step-3').parentElement.nextElementSibling.classList.add('text-mainColor');

            document.getElementById('step-2').classList.add('hidden')
            document.getElementById('step-1').classList.add('hidden')
        }
    });
}

function updateUrl(step) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("step", step);
    // Update the URL without reloading the page
    window.history.replaceState({}, "", `${window.location.pathname}?${urlParams.toString()}`);
}

// ------------------------------------------------------------------------------------------------
// dispatcher back

const dispatcherBackBtn = document.getElementById("dispatcher-back-btn");

if (dispatcherBackBtn) {
    dispatcherBackBtn.addEventListener("click", () => {
        window.location = "dispatcher.html";
    });
}

// ------------------------------------------------------------------------------------------------

const renderTabContent = (tab, tabsContent) => {
    tabsContent.forEach((content) => {
        if (tab.dataset.tab === content.dataset.tab) {
            content.classList.remove("hidden")
        } else {
            content.classList.add("hidden")
        }
    })
}

// Operators Details Tabs
let operatorDetailsTabs = document.querySelectorAll(".operator_details_tabs .operator_details_tab");
let tabsDetailsContent = document.querySelectorAll("main .tab_details_content")

operatorDetailsTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        operatorDetailsTabs.forEach(t => t.classList.remove("text-mainColor"))
        operatorDetailsTabs.forEach(t => t.classList.remove("border-mainColor"))
        operatorDetailsTabs.forEach(t => t.classList.remove("border-b-2"))
        // operatorDetailsTabs.forEach(t => t.classList.remove("border-red-600"))
        tab.classList.add("text-mainColor")
        tab.classList.add("font-semibold")
        tab.classList.add("border-mainColor")
        tab.classList.add("border-b-2")

        renderTabContent(tab, tabsDetailsContent)
    })
})




// 
let operatorTabs = document.querySelectorAll(".operator_tabs .operator_tab");
let operatorTabsContent = document.querySelectorAll("main .tab_content")

operatorTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        operatorTabs.forEach(t => t.classList.remove("text-mainColor"))
        operatorTabs.forEach(t => t.classList.remove("border-mainColor"))
        operatorTabs.forEach(t => t.classList.remove("border-b-2"))
        // operatorDetailsTabs.forEach(t => t.classList.remove("border-red-600"))
        tab.classList.add("text-mainColor")
        tab.classList.add("font-semibold")
        tab.classList.add("border-mainColor")
        tab.classList.add("border-b-2")

        renderTabContent(tab, operatorTabsContent)
    })
})




// ------------------------------------------------------------------------------------------------

// Operator Billings

const OperatorBillingsTab = document.querySelectorAll(".operator_billings_tabs .operator_billings_tab");
const OperatorBillingsTabContent = document.querySelectorAll("main .operator_billings_tab_content");

OperatorBillingsTab.forEach((tab) => {

        tab.addEventListener("click", () => {
            OperatorBillingsTab.forEach(t => t.classList.remove("text-mainColor"))
            OperatorBillingsTab.forEach(t => t.classList.remove("border-mainColor"))
            OperatorBillingsTab.forEach(t => t.classList.remove("border-b-2"))
            // operatorDetailsTabs.forEach(t => t.classList.remove("border-red-600"))
            tab.classList.add("text-mainColor")
            tab.classList.add("font-semibold")
            tab.classList.add("border-mainColor")
            tab.classList.add("border-b-2")

            renderTabContent(tab, clientTabContent)
        })

})


// ---------------------------------------------------------------- --------------------------------

const clientTab = document.querySelectorAll(".client-tabs .client-tab");
const clientTabContent = document.querySelectorAll("main .client-tab-content")

console.log("clientTab :", clientTab)

clientTab.forEach((tab) => {

    tab.addEventListener("click", () => {
        clientTab.forEach(t => t.classList.remove("text-mainColor"))
        clientTab.forEach(t => t.classList.remove("border-mainColor"))
        clientTab.forEach(t => t.classList.remove("border-b-2"))
        // operatorDetailsTabs.forEach(t => t.classList.remove("border-red-600"))
        tab.classList.add("text-mainColor")
        tab.classList.add("font-semibold")
        tab.classList.add("border-mainColor")
        tab.classList.add("border-b-2")

        renderTabContent(tab, clientTabContent)
    })

})



// ------------------------------------------------------------------------------------------------
// charts

// Bar Chart for Orders (Delivered vs Cancelled)
const ctx = document.getElementById('ordersChart').getContext('2d');
const orderChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['00', '07', '08', '09', '10', '11', '12', '13', '14'],
        datasets: [
            {
                label: 'Delivered',
                data: [20000, 23000, 21000, 22000, 25000, 24000, 26000, 28000, 29000],
                backgroundColor: 'rgba(0, 123, 255, 0.8)', // Blue color for Delivered
                borderWidth: 1
            },
            {
                label: 'Cancelled',
                data: [5000, 7000, 6000, 8000, 4000, 5000, 3000, 6000, 4000],
                backgroundColor: 'rgba(0, 200, 0, 0.8)', // Green color for Cancelled
                borderWidth: 1
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value / 1000 + 'k'; // Formatting the ticks to 'k'
                    }
                }
            }
        },
        responsive: true
    }
});

// Pie Chart for Orders per City
// const ctxCityOrders = document.getElementById('cityOrdersChart').getContext('2d');
// const cityOrdersChart = new Chart(ctxCityOrders, {
//     type: 'pie',
//     data: {
//         labels: ['City 1', 'City 2', 'City 3', 'City 4', 'City 5'],
//         datasets: [{
//             data: [42, 26, 12, 20, 18],
//             backgroundColor: ['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0', '#36a2eb']
//         }]
//     },
//     options: {
//         responsive: true
//     }
// });\

const ctxCityOrders = document.getElementById('cityOrdersChart').getContext('2d');

const cityOrdersChart = new Chart(ctxCityOrders, {
    type: 'pie',
    data: {
        labels: ['City 1', 'City 2', 'City 3', 'City 4', 'City 5', 'City 6', 'City 7', 'City 8', 'City 9', 'City 10', 'City 11', 'City 12'],
        datasets: [{
            data: [42, 20, 26, 12, 8, 10, 9, 6, 5, 4, 3, 2], // Percentages for each city
            backgroundColor: [
                '#ff4c4c', // City 1 (Red)
                '#ff8c1a', // City 2 (Orange)
                '#ff6e1a', // City 3 (Darker Orange)
                '#ffcc66', // City 4 (Yellow)
                '#ffb84d', // City 5 (Lighter Yellow)
                '#ffdb4d', // City 6 (Even lighter yellow)
                '#ffaa00', // City 7
                '#ffbf00', // City 8
                '#ffcc00', // City 9
                '#ffd700', // City 10
                '#e60000', // City 11 (Darker Red)
                '#ff6600', // City 12
            ],
            borderWidth: 0,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    usePointStyle: true,
                    boxWidth: 100,
                    padding: 35,
                }
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ": " + tooltipItem.raw  + "%";
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});


// Line Chart for Average Arrival Time
const ctxArrivalTime = document.getElementById('avgArrivalTimeChart').getContext('2d');
const avgArrivalTimeChart = new Chart(ctxArrivalTime, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [{
            label: 'Avg Arrival Time to Pickup',
            data: [9, 8, 5, 6, 3, 7, 4, 5, 8],
            borderColor: 'red',
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Line Chart for Average Delivery Time
const ctxDeliveryTime = document.getElementById('avgDeliveryTimeChart')?.getContext('2d');
const avgDeliveryTimeChart = new Chart(ctxDeliveryTime, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [{
            label: 'Avg Delivery Time',
            data: [35, 30, 40, 25, 30, 32, 36, 30, 34],
            borderColor: 'red',
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Line Chart for Average Waiting Time at Pickup
const ctxWaitingTime = document.getElementById('avgWaitingTimeChart')?.getContext('2d');
const avgWaitingTimeChart = new Chart(ctxWaitingTime, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [{
            label: 'Avg Waiting Time at Pickup',
            data: [11, 10, 9, 12, 13, 11, 10, 8, 9],
            borderColor: 'red',
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



const renderCard = (jobInfo) => {
    const { id, title, enterprise, location, descrition, modalities } = jobInfo

    const vacancyJobSection = document.querySelector('.vacancy-job-section')

    const cardVacancyContainer = document.createElement('div')
    cardVacancyContainer.classList.add('card-vacancy')
    cardVacancyContainer.classList.add('container')
    cardVacancyContainer.setAttribute('id', id)

    const h3Position = document.createElement('h3')
    h3Position.innerText = (title)

    const locationCompany = document.createElement('div')
    locationCompany.classList.add('location-company-div')

    const smallCompany = document.createElement('small')
    smallCompany.innerText = (enterprise)

    const smallLocation = document.createElement('small')
    smallLocation.innerText = (location)

    const paragraphCard = document.createElement('p')
    paragraphCard.classList.add('paragraph')
    paragraphCard.innerText = (descrition)

    const divSmallTagButton = document.createElement('div')
    divSmallTagButton.classList.add('small-button')

    modalities.forEach(item => {
        const smallTag = document.createElement('small')
        smallTag.classList.add('tag')
        smallTag.innerText = (item)
        divSmallTagButton.append(smallTag)
    })

    const buttonBrand = document.createElement('button')

    buttonBrand.classList.add('button-brand')
    buttonBrand.setAttribute('id', 'apply-button-id')
    buttonBrand.type = ('submit')

    const jobInfoData = localStorage.getItem("candidatos")
    const jobInfoArray = JSON.parse(jobInfoData)
    if (jobInfoArray) {
        const result = jobInfoArray.filter(item => item.id === jobInfo.id)
        if (result.length >= 1) {
            buttonBrand.innerText = ('Remover candidatura')
            buttonBrand.addEventListener('click', () => {
                const jobInfoData = localStorage.getItem("candidatos")
                const jobInfoArray = JSON.parse(jobInfoData)
    
                jobInfoArray.forEach((item, index) => {
                    if (item.id === jobInfo.id) {
                        jobInfoArray.splice(index, 1)
                    }
                })
    
                localStorage.setItem("candidatos", JSON.stringify(jobInfoArray))
                asideCardsFull()
                asideCardsEmpty()
                creatCards(jobsData)
            })
        } else {
            buttonBrand.innerText = ('Candidatar')
            buttonBrand.addEventListener('click', () => {
                const jobInfoData = localStorage.getItem("candidatos")
                let jobInfoArray = []
        
                if (jobInfoData) {
                    jobInfoArray = JSON.parse(jobInfoData)
                    jobInfoArray.push(jobInfo)
                } else {
                    jobInfoArray.push(jobInfo)
                }
        
                localStorage.setItem("candidatos", JSON.stringify(jobInfoArray))
                creatCards(jobsData)
                asideCardsFull()
            })
        }
    } else {
        buttonBrand.innerText = ('Candidatar')
        buttonBrand.addEventListener('click', () => {
            const jobInfoData = localStorage.getItem("candidatos")
            let jobInfoArray = []
    
            if (jobInfoData) {
                jobInfoArray = JSON.parse(jobInfoData)
                jobInfoArray.push(jobInfo)
            } else {
                jobInfoArray.push(jobInfo)
            }
    
            localStorage.setItem("candidatos", JSON.stringify(jobInfoArray))
            creatCards(jobsData)
            asideCardsFull()
        })
    }

    locationCompany.append(smallCompany, smallLocation)
    divSmallTagButton.append(buttonBrand)
    cardVacancyContainer.append(h3Position, locationCompany, paragraphCard, divSmallTagButton)
    vacancyJobSection.appendChild(cardVacancyContainer)

    return vacancyJobSection
}

function creatCards(arrObject) {
    const vacancyJobSection = document.querySelector('.vacancy-job-section')
    vacancyJobSection.innerHTML = ''
    arrObject.forEach(item => {
        renderCard(item)
    })
}
creatCards(jobsData)

function baseAside() {
    const asideCards = document.querySelector('.aside-section')


    const asideContainer = document.createElement('aside')
    asideContainer.classList.add('aside')
    asideContainer.classList.add('container')

    const vacancySelectorDiv = document.createElement('div')
    vacancySelectorDiv.classList.add('vacancy-selector-div')
    vacancySelectorDiv.classList.add('container')
    vacancySelectorDiv.setAttribute('id', 'vacancy-selector-id')

    const h3SelectedVacancy = document.createElement('h3')
    h3SelectedVacancy.classList.add('selected-vacancy-title')
    h3SelectedVacancy.innerText = ('Vagas selecionadas')

    const asideCardsConst = document.createElement('div')
    asideCardsConst.setAttribute('id', 'aside-cards-id')
    asideCardsConst.classList.add('aside-cards')

    vacancySelectorDiv.append(h3SelectedVacancy, asideCardsConst)
    asideContainer.appendChild(vacancySelectorDiv)
    asideCards.append(asideContainer)
}
baseAside()


function asideCardsFull() {
    const candidatesArray = localStorage.getItem("candidatos")
    let parseCandidates = []

    if (candidatesArray) {
        parseCandidates = JSON.parse(candidatesArray)
    }

    console.log(parseCandidates)

    const asideCardsConst = document.getElementById('aside-cards-id')
    const sectionCardsContainer = document.createElement('section')
    sectionCardsContainer.setAttribute('id', 'aside-section-mini-cards')
    asideCardsConst.innerHTML = ''

    asideCardsConst.appendChild(sectionCardsContainer)

    parseCandidates.forEach(job => {
        const asideDivMiniCards = document.createElement('div')
        asideDivMiniCards.classList.add('mini-cards-section')

        const removeButtonH3 = document.createElement('div')
        removeButtonH3.classList.add('remove-button-h3-div')

        const h3PositionJob = document.createElement('h3')
        h3PositionJob.classList.add('position-job')
        h3PositionJob.innerText = (job.title)

        const buttonCloseButton = document.createElement('button')
        buttonCloseButton.classList.add('close-button-class')
        buttonCloseButton.setAttribute('id', 'close-button-id')
        buttonCloseButton.type = ('submit')
        buttonCloseButton.addEventListener('click', () => {
            const jobInfoData = localStorage.getItem("candidatos")
            const jobInfoArray = JSON.parse(jobInfoData)

            jobInfoArray.forEach((item, index) => {
                if (item.id === job.id) {
                    jobInfoArray.splice(index, 1)
                }
            })


            localStorage.setItem("candidatos", JSON.stringify(jobInfoArray))
            asideCardsFull()
            asideCardsEmpty()
            creatCards(jobsData)
        })

        const imgTrashButton = document.createElement('img')
        imgTrashButton.src = ('./assets/img/trash.svg')

        const locationCompanyDivAside = document.createElement('div')
        locationCompanyDivAside.classList.add('location-company-div-aside')

        const smallCompanyMiniAside = document.createElement('small')
        smallCompanyMiniAside.innerText = (job.enterprise)

        const smallLocationMiniAside = document.createElement('small')
        smallLocationMiniAside.innerText = (job.location)

        buttonCloseButton.appendChild(imgTrashButton)
        removeButtonH3.append(h3PositionJob, buttonCloseButton)
        locationCompanyDivAside.append(smallCompanyMiniAside, smallLocationMiniAside)
        asideDivMiniCards.append(removeButtonH3, locationCompanyDivAside)
        sectionCardsContainer.appendChild(asideDivMiniCards)
    })

    return sectionCardsContainer
}
asideCardsFull()


function asideCardsEmpty() {

    const asideCards = document.querySelector('.aside-section')

    const asideCardsConst = document.getElementById('aside-cards-id')

    const candidatesArray = localStorage.getItem("candidatos")
    const candidatesInfoArray = JSON.parse(candidatesArray)

    if (candidatesInfoArray === null || candidatesInfoArray.length === 0) {
        const paragraph = document.createElement('p')
        paragraph.classList.add('paragraph')
        paragraph.innerText = ('Você ainda não aplicou para nenhuma vaga')

        const divAllP = document.createElement('div')
        divAllP.classList.add('div-all-p')

        const p1 = document.createElement('p')
        p1.classList.add('p1')

        const p2 = document.createElement('p')
        p2.classList.add('p2')

        const divP = document.createElement('div')
        divP.classList.add('div-p')

        const p3 = document.createElement('p')
        p3.classList.add('p3')

        const p3Const = document.createElement('p')
        p3Const.classList.add('p3')

        const p4 = document.createElement('p')
        p4.classList.add('p4')

        divP.append(p3, p3Const, p4)
        divAllP.append(p1, p2, divP)
        asideCardsConst.append(paragraph, divAllP)
    }

    return asideCards

}
asideCardsEmpty()

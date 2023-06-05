const getTemplate = (data = [], placeholder, title, selectedId) => {

    let text = placeholder ?? 'placholder default';

    const items = data.map(item => {
        let cls = '';
        if (item.id == selectedId) {
            text = item.value;
            cls = 'selected';
        }

        return `
            <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
        `;
    })

    items.join('');
    return (`
        <div class="select__backdrop" data-type="select-backdrop"></div>
        <div class="select__title-wrapper">
            <div class="text select__title">${title}</div>
        </div>
        
        <div class="select__wrapper input">
            <div class="select__value input__value" data-type="input">
                <span class="text input__value-item select__value-item" data-type="value">${text}</span>
                <i class="fa fa-chevron-down" aria-hidden="true" data-type="arrow"></i>
            </div>
            <div class="select__dropdown">
                <ul class="select__list text">
                    ${items.join('')}
                </ul>
            </div>
        </div>
    `);
}

export class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector); 
        this.options = options;
        this.selectedID = options.selectedID;        
        this.#render();
        this.#setup();
    }

    #render() {
        const { placeholder, data, title } = this.options;
        if (this.$el) {
            this.$el.classList.add('select');
            this.$el.innerHTML = getTemplate(data, placeholder, title, this.selectedID);
        }
        return;
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this);
        if (this.$el) {
            this.$el.addEventListener('click', this.clickHandler);
            this.$arrow = this.$el.querySelector('[data-type="arrow"]');
            this.$value = this.$el.querySelector('[data-type="value"]');
        }
        return;
    }

    clickHandler(event) {
        const { type } = event.target.dataset;
        if ((type === 'input')||(type === 'value')) {
            this.toggle();
        }
        else if (type === 'item') {
            const id = event.target.dataset.id;
            this.select(id);
        }
        else if (type === 'select-backdrop') {
            this.close();
        }
        else {
            this.close();
        }
    }

    get isOpen() {
        return this.$el.classList.contains('open')
    }

    get current() {
        return this.options.data.find(item => item.id == this.selectedID);
    }

    select(id) {
        this.selectedID = id;
        this.$value.textContent = this.current.value;
        this.$el.querySelectorAll('[data-type="item"]').forEach(element => {
            element.classList.remove('selected');
        });
        this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected');

        this.close();
    }

    toggle() {
        this.isOpen ? this.close() : this.open()
    }

    destroy() {
        this.$el.removeEventListener('click', this.clickHandler);
        this.$el.innerHTML = '';
    }

    open() {
        this.$el.classList.add('open');
        this.$arrow.classList.remove('fa-chevron-down');
        this.$arrow.classList.add('fa-chevron-up');
    }

    close() {
        this.$el.classList.remove('open');
        this.$arrow.classList.remove('fa-chevron-up');
        this.$arrow.classList.add('fa-chevron-down');
    }
}

PROJECT_NAME := zadanie-rekrutacyjne
LESS_FILES := less/*.less   
CSS_FILE := css/style.css  
PREFIX := ./


all: css


css: $(PREFIX)$(CSS_FILE)

$(PREFIX)$(CSS_FILE): $(PREFIX)$(LESS_FILES)
	lessc $^ $@


clean:
	rm -f $(PREFIX)$(CSS_FILE)


install:
	npm install

watch:
	less-watch-compiler $(PREFIX)less $(PREFIX)css

.PHONY: all clean install watch
